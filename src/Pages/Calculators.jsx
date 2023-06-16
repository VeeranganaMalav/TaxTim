import React from 'react'
import "../Pages/Calculators.css"

const Calculators = () => {
  return (
    <div>
      <h1>Tax Calculators</h1>
      <h4>Calculate everything you need to know about your tax and how tax affects you</h4>
      <h3>Calculators for Individuals</h3>
      <div className="individual-calc">
        <a href="/calculators/income-tax" className="calc-icon">
          <div className="container-ind">
            <div id="img1" className="img" style="visibility: visible; display: block;">
              <img src="images/calc-income-tax.png" width="195" alt="img"/>
            </div>
            <div id="img1desc" className="blurb" style="visibility: hidden; display: none;">
              How to calculate how much PAYE and UIF will be deducted from your salary in order to work out your take home pay
            </div>
            <div class="label">
              <b>Salary Tax</b>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Calculators