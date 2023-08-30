import React, { useEffect, useState } from 'react'
import "../css/IncomeTaxCalculator.css"
import { Link } from 'react-router-dom';
import BillingPage from './BillingPage';
import  PieChart  from './PieChart';
import { Chart } from 'chart.js';
import { CategoryScale } from 'chart.js';
import { Data } from './Data';
import 'chart.js/auto'


let initialState = {
    age: "",
    salaryIncome: 250000,
    houseProperty: 0,
    capitalGains: 0,
    deductions: 0
}
Chart.register(CategoryScale)
const IncomeTaxCalculator = () => {
    const [formData, setFormData] = useState(initialState);
    const [incomeTax, setIncomeTax] = useState(0);
    const [healthEducationCess, setHealthEducationCess] = useState(0);
    const {age,salaryIncome,houseProperty,capitalGains,deductions}=formData
    
    console.log(incomeTax)
    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData(prev => ({...prev, [name] : value}));
      
    
    }
    const part=[]
    function addData(){
       part.push(salaryIncome,houseProperty,capitalGains,deductions,incomeTax)   
    
       console.log(part)
    }
    addData()
    
    useEffect(()=>{
     setChartData({
        labels: ["Income from Salary","Income from House Property","Capital Gains","Allowances and Deductions","Income Tax"], 
        datasets: [
          {
            label: "Income Distribution for a year",
            data: part.map(el=>el),
            
          }
        ]
      }
     )
    },[formData,incomeTax])
  
    



    const [chartData, setChartData] = useState({
        labels: ["Income from Salary","Income from House Property","Capital Gains","Allowances and Deductions","Income Tax"], 
        datasets: [
          {
            label: "Users Gained ",
            data: part.map(el=>el),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "purple",
              "orange",
              "#f80303",
              "green"
            ],
            borderColor: "black",
           
          }
        ]
      });
      console.log(chartData)
    

    const handleSubmit = (e) => {
        e.preventDefault();

        let income = (Number(formData.salaryIncome) + Number(formData.houseProperty) + Number(formData.capitalGains)) - Number(formData.deductions);
        console.log(typeof formData.salaryIncome, income);

        let tax;
        if(formData.age === "lt60"){
            if(income <= 250000){
                tax = 0;
            }
            else if(income > 250000 && income <= 500000){
                tax = (income - 250000) * 0.05;
            }
            else if(income > 500000 && income <= 1000000){
                tax = (250000 * 0.05) + ((income - 500000) * 0.20);
            }
            else{
                tax = (250000 * 0.05) + (500000 * 0.20) + ((income - 1000000) * 0.30);
            }
        }
        else if(formData.age === "gte60"){
            if(income <= 300000){
                tax = 0;
            }
            else if(income > 300000 && income <= 500000){
                tax = (income - 300000) * 0.05;
            }
            else if(income > 500000 && income <= 1000000){
                tax = (200000 * 0.05) + ((income - 500000) * 0.20);
            }
            else{
                tax = (200000 * 0.05) + (500000 * 0.20) + ((income - 1000000) * 0.30);
            }
        }
        else if(formData.age === "gte80"){
            if(income <= 500000){
                tax = 0;
            }
            else if(income > 500000 && income <= 1000000){
                tax = (income - 500000) * 0.20;
            }
            else{
                tax = (500000 * 0.20) + ((income - 1000000) * 0.30);
            }
        }
        
        setIncomeTax(tax);
        setHealthEducationCess(tax*0.04);
    }

  return (
    <div style={{display:"flex"}}>
    <div className="income-tax-calci" style={{border:"2px solid red", width:"60%"}}>
        <h1 className="calculator-heading">Income Tax Calculator</h1>
        <form onSubmit={handleSubmit} id="incometax-form">
            <label htmlFor="age" className="calculator-label">
                Age
                <select name="age" id="gender" value={formData.age} onChange={handleChange} className="calculator-fields">
                    <option value="">Select</option>
                    <option value="lt60">Below 60 Years</option>
                    <option value="gte60">Above 60 Years</option>
                    <option value="gte80">Above 80 Years</option>
                </select>
            </label>
            <label htmlFor="salaryIncome" className="calculator-label">
                Income from Salary
                <input type="number" name="salaryIncome" value={formData.salaryIncome} onChange={handleChange} className="calculator-fields"/>
            </label>
            <label htmlFor="houseProperty" className="calculator-label">
                Income from House Property
                <input type="number" name="houseProperty" value={formData.houseProperty} onChange={handleChange} className="calculator-fields"/>
            </label>
            <label htmlFor="capitalGains" className="calculator-label">
                Capital Gains
                <input type="number" name="capitalGains" value={formData.capitalGains} onChange={handleChange} className="calculator-fields"/>
            </label>
            <label htmlFor="deductions" className="calculator-label">
                Allowances and Deductions
                <input type="number" name="deductions" value={formData.deductions} onChange={handleChange} className="calculator-fields"/>
            </label>
            <input type="submit" value="Calculate" id="calculate-btn"/>
        </form>
        <div className="calculations">
            <Link to="/epay-tax">
                <button id="e-pay-tax">Pay Tax</button>
            </Link>
            <h3>Calculated Income Tax: <span className="calculated-tax">{incomeTax}</span></h3>
            <h3>Calculated Health and Education Cess: <span className="calculated-tax">{healthEducationCess}</span></h3>
        </div>
    </div>
    <div>
       <PieChart chartData={chartData}  />
    </div>
    </div>
  )
}

export default IncomeTaxCalculator