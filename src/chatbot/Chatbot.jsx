import React from 'react'
import { useNavigate } from 'react-router-dom'
import ChatBot from "react-simple-chatbot"
import { styles } from './styles'
import { ThemeProvider } from 'styled-components'
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#2aa12e',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#2aa12e',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}


export const Chatbot = (props) => {
    const navigate=useNavigate()

  return (
    <div>
       <div style={{
        ...styles.supportWindow,
        ...{opacity:props.visible?'1':'0'},
       
    
    }} className='transition-5'>
   <ThemeProvider theme={theme}>

    <ChatBot height="470px" contentStyle={{width:"340px",marginLeft:"1px"}} bubbleStyle={{fontSize:"17px"}}  inputStyle={{width:"345px",height:"40px",marginLeft:"1px"}} submitButtonStyle={{marginRight:"5px", marginTop:"7px"}}headerTitle="Tim" botAvatar="https://www.taxtim.com/za/images/og-thumb3.jpg" steps={[
          {
            id:'Greet',
            message:'Hello! My name is Tim. I am here to help you make tax easy.',
            trigger:'Ask Name'
          },
          {
            id: 'Ask Name',
            message: 'Please,May I know your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! How May I help you?',
            trigger: 'option1',
          },
          {
            id: 'option1',
            options: [
              { value: 'Eligibity Criteria', label: 'Eligibity Criteria', trigger: '5' },
              { value: 'Current Tax Rates', label: 'Current Tax Rates', trigger: '6' },
              { value: 'ITR filing process', label: 'ITR filing process', trigger: 'ITR filing' },
              { value: 'ITR Form to Fill', label: 'ITR Form to Fill', trigger: 'ITR Form to Fill' },
              { value: 'Documents Required for Filing Tax Purposes', label: 'Documents Required for Filing Tax Purposes', trigger: 'documents' },
            ],
          },
          {
            id: '5',
            message: 'Are you a Resident of India?',
            trigger: 'Nationality-yes-no',
          },
          {
            id: 'Nationality-yes-no',
            options: [
              { value: 'Yes', label: 'Yes', trigger: 'Nationality-yes' },
              { value: 'No', label: 'No', trigger: 'Question-5-no' },
            ],
          },
          {
            id: 'Nationality-yes',
            message: 'Select your type of Profession?',
            trigger: 'Profession',
          },
          {
            id: 'Profession',
            options: [
              { value: 'Salaried Individual', label: 'Salaried Individual', trigger: 'salary' },
              { value: 'Self-Employed/Business', label: 'Self-Employed/Business', trigger: 'salary' },
            ],
          },
          {
            id: 'salary',
            message: 'Select your type Age bracket?',
            trigger: 'Salary-Age',
          },
          {
            id: 'Salary-Age',
            options: [
              { value: 'Between 18-60', label: 'Between 18-60', trigger: 'Between 18-60' },
              { value: 'Between 60-80', label: 'Between 60-80', trigger: 'Between 60-80' },
              { value: 'Above 80', label: 'Above 80', trigger: 'Above 80' },
            ],
          },
          {
            id: 'Between 18-60',
            message: 'Is your Income Above Rs 2.5 Lakhs?',
            trigger: 'income 18-60',
          },
          {
            id: 'income 18-60',
            options: [
              { value: 'Yes', label: 'Yes', trigger: '18-60-Yes' },
              { value: 'No', label: 'No', trigger: 'Question-2' },
            ],
          },
          {
            id: '18-60-Yes',
            message: 'Yes! You are eligible to Pay Tax',
            end:true,
          },
          {
            id: 'Between 60-80',
            message: 'Is your Income Above Rs 3 Lakhs?',
            trigger: 'income 60-80',
          },
          {
            id: 'income 60-80',
            options: [
              { value: 'Yes', label: 'Yes', trigger: '60-80-Yes' },
              { value: 'No', label: 'No', trigger: 'Question-2' },
            ],
          },
          {
            id: '60-80-Yes',
            message: 'Yes! You are eligible to Pay Tax',
            end:true,
          },
          {
            id: 'Above 80',
            message: 'Is your Income Above Rs 3.5 Lakhs?',
            trigger: 'above 80',
          },
          {
            id: 'above 80',
            options: [
              { value: 'Yes', label: 'Yes', trigger: '80-Yes' },
              { value: 'No', label: 'No', trigger: 'Question-2' },
            ],
          },
          {
            id: '80-Yes',
            message: 'Yes! You are eligible to Pay Tax',
            end:true,
          },
          {
            id: 'Question-2',
            message: 'Have you deposited more than 1 crore in any current bank account in FY 2022-23?',
            trigger: 'Question-2-yes-no',
          },
          {
            id: 'Question-2-yes-no',
            options: [
              { value: 'Yes', label: 'Yes', trigger: '18-60-Yes' },
              { value: 'No', label: 'No', trigger: 'Question-2-no' },
            ],
          },
          {
            id: 'Question-2-no',
            message: 'Have you paid electricity bill of more than 1 lakh in total during FY 2022-23?',
            trigger:'Question-3-yes-no',
          },
          {
            id: 'Question-3-yes-no',
            options: [
              { value: 'Yes', label: 'Yes', trigger: '18-60-Yes' },
              { value: 'No', label: 'No', trigger: 'Question-3-no' },
            ],
          },
          {
            id: 'Question-3-no',
            message: 'Have you spent more than 2 Lakhs on yourself or another individual for the purpose of foreign travel in FY 2022-23 ?',
            trigger:'Question-4-yes-no',
          },
          {
            id: 'Question-4-yes-no',
            options: [
              { value: 'Yes', label: 'Yes', trigger: '18-60-Yes' },
              { value: 'No', label: 'No', trigger: 'Question-4-no' },
            ],
          },
          {
            id: 'Question-4-no',
            message: ' Do you hold any assets, bank accounts, signing authority in any entity located outside India?',
            trigger:'Question-5-yes-no',
          },
          {
            id: 'Question-5-yes-no',
            options: [
              { value: 'Yes', label: 'Yes', trigger: '18-60-Yes' },
              { value: 'No', label: 'No', trigger: 'Question-5-no' },
            ],
          },
          {
            id: 'Question-5-no',
            message: 'Sorry ! You are not Eligible to Pay Tax.',
            end:true,
          },
// ----------------------------------------------------Eligibitiy Criterie ends-----------------------------for salaried employees
          {
            id:'6',
            component:(
              <img src="https://taxguru.in/wp-content/uploads/2020/02/New-Vs-Old-Income-Tax-Slabs.jpg"/>
            ),
            end:true,
          },
          {
            id:'documents',
            message:"1.PAN Card,2.Aadhar Card,3.Form No.16,4.Form 16A/Form 16B/Form 16C,5.Bank Account Details,6.Form 26AS,7.Tax Saving Investment & Expenditure,8.Home Loan Settlement,7.Capital Gain Details,8.renatal Income,11.Foreign Income If Any,12.Dividend Income",
            end:true,
          },
          {
            id:'ITR filing',
            message:"Step 1: Calculation of Income and Tax,Step 2: Tax Deducted at Source (TDS) Certificates and Form 26AS,Step 3: Choose the right Income Tax Form,Step 4: Download ITR utility from Income Tax Portal,Step 5: Fill in your details in the Downloaded File,Step 6: Validate the Information Entered, Step 7: Convert the file to XML Format, Step 8: Upload the XML file on the Income Tax Portal",
            trigger:"tax calculator",
          },
          {
            id:'tax calculator',
            message:"Do you want to calculate your Tax?",
            trigger:"tax calculator-yes-no",
          },
          {
            id:'tax calculator-yes-no',
            options:[
              {value:"Yes",label:"Yes",trigger:"tax calculator-yes"},
              {value:"No",label:"No",trigger:"tax calculator-no"},
            ],
          },
          {
            id:'tax calculator-yes',
            component:(
              <button onClick={()=>navigate("/calculators")} style={{color:"red"}}>Click Here To Calculate Your Tax</button>
            ),
            end:true,
          },
          {
            id:'tax calculator-no',
            message:"For other Info you can visit our FAQ section.",
            end:true,
          },
          {
            id:'ITR Form to Fill',
            message:"Select your category",
            trigger:"select category",
          },
          {
            id:'select category',
            options:[
              {value:"Individual",label:"Individual",trigger:"Category-1"},
              {value:"Company Registered in India",label:"Company Registered in India",trigger:"Category-2"},
              {value:"Universities/Colleges, Charitable trusts, political parties, research institutions",label:"Universities/Colleges, Charitable trusts, political parties, research institutions",trigger:"Category-3"},
              {value:"NRI, Shareholders of Private Company, Director of Company",label:"NRI, Shareholders of Private Company, Director of Company",trigger:"Category-4"},
              {value:"Body of Individuals(BOI), Limited Liability Partnership(LLP) Firms",label:"Body of Individuals(BOI), Limited Liability Partnership(LLP) Firms",trigger:"Category-5"},
            ]
         
          },
          {
            id:'Category-1',
            message:"Please, Select Your Source of Income.",
            trigger:"Category-1-1",
          },
          {
            id:'Category-1-1',
            options:[
              {value:"pension/salary, 1 house property",label:"Pension/salary, 1 house property",trigger:"ITR1"},
              {value:"capital gains, 2 or more house property & foreign resource",label:"Capital gains, 2 or more house property & foreign resource",trigger:"ITR2"},
              {value:"business",label:"Business ",trigger:"ITR4"},
            ],
         
          },
          {
            id:'ITR1',
            message:"You will have to fill ITR1",
            end:true,
          },
          {
            id:'ITR2',
            message:"You will have to fill ITR2",
            end:true,
          },
          {
            id:'ITR4',
            message:"You will have to fill ITR4",
            end:true,
          },
          {
            id:'Category-2',
            message:"You will have to fill ITR6",
            end:true,
          },
          {
            id:'Category-3',
            message:"You will have to fill ITR7",
            end:true,
          },
          {
            id:'Category-4',
            message:"You will have to fill ITR2",
            end:true,
          },
          {
            id:'Category-5',
            message:"You will have to fill ITR5",
            end:true,
          },
        
         
        ]}/>
   </ThemeProvider>
   </div>
 


    </div>
  )
}
