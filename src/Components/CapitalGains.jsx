import React, { useState } from 'react'
import "../css/CapitalGainsCalculator.css"
import { Link } from 'react-router-dom';

let initialState = {
    salePrice: 0,
    acquisition: 0,
    improvementCost: 0,
    commission: 0
}

const CapitalGains = () => {
    const [stcgformData, setSTCGFormData] = useState(initialState);
    const [ltcgformData, setLTCGFormData] = useState(initialState);
    const [stcg, setSTCG] = useState(0);
    const [stcgTax, setSTCGTax] = useState(0);
    const [ltcg, setLTCG] = useState(0);
    const [ltcgTax, setLTCGTax] = useState(0);

    const handleSTCGSubmit = (e) => {
        e.preventDefault();

        let capitalGains = stcgformData.salePrice - stcgformData.commission - (stcgformData.acquisition - stcgformData.improvementCost);
        setSTCG(capitalGains);

        let capitalGainsTax = (0.10*capitalGains).toFixed(2);
        setSTCGTax(capitalGainsTax);

        setSTCGFormData(initialState);
    }

    const handleLTCGSubmit = (e) => {
        e.preventDefault();

        let capitalGains = ltcgformData.salePrice - ltcgformData.commission - (ltcgformData.acquisition - ltcgformData.improvementCost);
        setLTCG(capitalGains);

        let capitalGainsTax = (0.15*capitalGains).toFixed(2);
        setLTCGTax(capitalGainsTax);

        setLTCGFormData(initialState);
    }

    const handleSTCGChange = (e) => {
        let {name, value} = e.target;

        setSTCGFormData(prev => ({...prev, [name] : value}))
    }

    const handleLTCGChange = (e) => {
        let {name, value} = e.target;

        setLTCGFormData(prev => ({...prev, [name] : value}))
    }

  return (
    <div className="capitalgains-tax-calci">
        <h1 className="calculator-heading">Capital Gains Calculator</h1>

        {/* --------------------------- SHORT TERM CAPITAL GAINS ---------------------------- */}
        <h2 className="calc-subheading">Short Term Capital Gains</h2>
        <div className="sub-calc">
            <form onSubmit={handleSTCGSubmit} id="short-term-gains-form">
                <label htmlFor="salePrice" className="calculator-label">
                    Final Sale Price
                    <input type="number" name="salePrice" value={stcgformData.salePrice} onChange={handleSTCGChange} className="calculator-fields"/>
                </label>
                <label htmlFor="acquisition" className="calculator-label">
                    Cost of Acquisition
                    <input type="number" name="acquisition" value={stcgformData.acquisition} onChange={handleSTCGChange} className="calculator-fields"/>
                </label>
                <label htmlFor="improvementCost" className="calculator-label">
                    Improvement Cost
                    <input type="number" name="improvementCost" value={stcgformData.improvementCost} onChange={handleSTCGChange} className="calculator-fields"/>
                </label>
                <label htmlFor="commission" className="calculator-label">
                    Brokerage/Commission
                    <input type="number" name="commission" value={stcgformData.commission} onChange={handleSTCGChange} className="calculator-fields"/>
                </label>
                <input type="submit" value="Calculate" className="calculate-btn"/>
            </form>
            <div className="calculations">
                <Link to="/epay-tax">
                    <button className="e-pay-tax">Pay Tax</button>
                </Link>
                <h4>Net short term capital gains: <span className="calculated-tax">{stcg}</span></h4>
                <h4>STGC Tax applicable: <span className="calculated-tax">{stcgTax}</span></h4>
            </div>
        </div>


        {/* --------------------------- LONG TERM CAPITAL GAINS ---------------------------- */}
        <h2 className="calc-subheading">Long Term Capital Gains</h2>
        <div className="sub-calc">
            <form onSubmit={handleLTCGSubmit}  id="long-term-gains-form">
            <label htmlFor="salePrice" className="calculator-label">
                    Final Sale Price
                    <input type="number" name="salePrice" value={ltcgformData.salePrice} onChange={handleLTCGChange} className="calculator-fields"/>
                </label>
                <label htmlFor="acquisition" className="calculator-label">
                    Cost of Acquisition
                    <input type="number" name="acquisition" value={ltcgformData.acquisition} onChange={handleLTCGChange} className="calculator-fields"/>
                </label>
                <label htmlFor="improvementCost" className="calculator-label">
                    Improvement Cost
                    <input type="number" name="improvementCost" value={ltcgformData.improvementCost} onChange={handleLTCGChange} className="calculator-fields"/>
                </label>
                <label htmlFor="commission" className="calculator-label">
                    Brokerage/Commission
                    <input type="number" name="commission" value={ltcgformData.commission} onChange={handleLTCGChange} className="calculator-fields"/>
                </label>
                <input type="submit" value="Calculate" className="calculate-btn"/>
            </form>
            <div className="calculations">
                <Link to="/epay-tax">
                    <button className="e-pay-tax">Pay Tax</button>
                </Link>
                <h4>Net long term capital gains: <span  className="calculated-tax">{ltcg}</span></h4>
                <h4>LTGC Tax applicable: <span  className="calculated-tax">{ltcgTax}</span></h4>
            </div>
        </div>
    </div>
  )
}

export default CapitalGains