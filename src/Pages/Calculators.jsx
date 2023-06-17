import React from 'react'
import "../css/Calculators.css"
import tim from "../images/c2.png"
import { Link } from 'react-router-dom'

const Calculators = () => {

  return (
    <div className="calci">
      <h1>Tax Calculators</h1>
      <h2>Calculate everything you need to know about your tax and how tax affects you</h2>

      <div className="calc-tim">
        <div className="individual-calc">
          <Link to="/calculators/income-tax" className="calc-icon">
            <div className="container">
              <div className="container-ind">
                <div id="img1" className="img">
                  <img src="https://media.taxtim.com/images/calc-income-tax.png" width="195" alt="img" />
                </div>
                <div className="label">
                  <b>Salary Tax</b>
                </div>
              </div>
            </div>
          </Link>


          <Link to="/calculators/income-tax" className="calc-icon">
            <div className="container">
              <div className="container-ind">
                <div id="img2" className="img">
                  <img src="https://media.taxtim.com/images/calc-refund.png" width="195" alt="img" />
                </div>
                <div className="label">
                  <b>Tax Refund</b>
                </div>
              </div>
            </div>
          </Link>


          <Link to="/calculators/income-tax" className="calc-icon">
            <div className="container">
              <div className="container-ind">
                <div id="img3" className="img">
                  <img src="https://media.taxtim.com/images/calc-lump-sum.png" width="195" alt="img" />
                </div>
                <div className="label">
                  <b>Retirement Lump Sum</b>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/calculators/income-tax" className="calc-icon">
            <div className="container">
              <div className="container-ind">
                <div id="img4" className="img">
                  <img src="https://media.taxtim.com/images/calc-travel.png" width="195" alt="img" />
                </div>
                <div className="label">
                  <b>Travel Deduction</b>
                </div>
              </div>
            </div>
          </Link>


          <Link to="/calculators/capital-gains-tax" className="calc-icon">
            <div className="container">
              <div className="container-ind">
                <div id="img5" className="img">
                  <img src="https://media.taxtim.com/images/calc-capital-gains.png" width="195" alt="img" />
                </div>
                <div className="label">
                  <b>Capital Gains Tax</b>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/calculators/income-tax" className="calc-icon">
            <div className="container">
              <div className="container-ind">
                <div id="img6" className="img">
                  <img src="https://media.taxtim.com/images/calc-health.png" width="195" alt="img" />
                </div>
                <div className="label">
                  <b>Medical Aid Credits</b>
                </div>
              </div>
            </div>
          </Link>


          <Link to="/calculators/income-tax" className="calc-icon">
            <div className="container">
              <div className="container-ind">
                <div id="img7" className="img">
                  <img src="https://media.taxtim.com/images/calc-wear-and-tear.png" width="195" alt="img" />
                </div>
                <div className="label">
                  <b>Wear & Tear</b>
                </div>
              </div>
            </div>
          </Link>


          <Link to="/calculators/income-tax" className="calc-icon">
            <div className="container">
              <div className="container-ind">
                <div id="img8" className="img">
                  <img src="https://media.taxtim.com/images/calc-retirement.png" width="195" alt="img" />
                </div>
                <div className="label">
                  <b>Retirement Savings</b>
                </div>
              </div>
            </div>
          </Link>


          <Link to="/calculators/income-tax" className="calc-icon">
            <div className="container">
              <div className="container-ind">
                <div id="img9" className="img">
                  <img src="https://media.taxtim.com/images/calc-manufacturing-wear-and-tear.png" width="195" alt="img" />
                </div>
                <div className="label">
                  <b>Taxable Local Interest</b>
                </div>
              </div>
            </div>
          </Link>


          <Link to="/calculators/income-tax" className="calc-icon">
            <div className="container">
              <div className="container-ind">
                <div id="img10" className="img">
                  <img src="https://media.taxtim.com/images/calc-income-tax.png" width="195" alt="img" />
                </div>
                <div className="label">
                  <b>Foreign Dividends</b>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="tim-img">
          <img src={tim} alt="tim-img" />
        </div>
      </div>
    </div>
  )
}

export default Calculators