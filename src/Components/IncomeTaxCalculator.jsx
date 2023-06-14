import React from 'react'

const IncomeTaxCalculator = () => {
  return (
    <div>
        <h1>IncomeTaxCalculator</h1>
        <form>
            <label htmlFor="gender">
                Age/Gender
                <select name="gender" id="gender">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="seniorcitizen">Senior Citizen</option>
                    <option value="superseniorcitizen">Super Senior Citizen</option>
                </select>
            </label>
            <label htmlFor="residentialStatus">
                Residential Status
                <select name="residentialStatus" id="residential-status">
                    <option value="">Select</option>
                    <option value="resident">Resident</option>
                    <option value="nonresident">Non-Resident</option>
                </select>
            </label>
            <label htmlFor="">
                Income from Salary
                <input type="number" />
            </label>
            <label htmlFor="">
                Income from House Property
                <input type="number" />
            </label>
            <label htmlFor="">
                Capital Gains
                <input type="number" />
            </label>
            <label htmlFor="">
                Deductions
                <input type="number" />
            </label>
        </form>
    </div>
  )
}

export default IncomeTaxCalculator