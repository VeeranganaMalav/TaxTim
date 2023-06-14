import React, { useState } from 'react'

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
    <div>
        <h1>Capital Gains</h1>
        <div>
            <h2>Short Term Capital Gains</h2>
            <form onSubmit={handleSTCGSubmit}>
                <label htmlFor="salePrice">
                    Final Sale Price:
                    <input type="number" name="salePrice" value={stcgformData.salePrice} onChange={handleSTCGChange}/>
                </label>
                <label htmlFor="acquisition">
                    Cost of Acquisition:
                    <input type="number" name="acquisition" value={stcgformData.acquisition} onChange={handleSTCGChange}/>
                </label>
                <label htmlFor="improvementCost">
                    Improvement Cost:
                    <input type="number" name="improvementCost" value={stcgformData.improvementCost} onChange={handleSTCGChange}/>
                </label>
                <label htmlFor="commission">
                    Brokerage/Commission:
                    <input type="number" name="commission" value={stcgformData.commission} onChange={handleSTCGChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h4>Net short term capital gains: {stcg}</h4>
            <h4>STGC Tax applicable: {stcgTax}</h4>
        </div>
        <div>
            <h2>Long Term Capital Gains</h2>
            <form onSubmit={handleLTCGSubmit}>
            <label htmlFor="salePrice">
                    Final Sale Price:
                    <input type="number" name="salePrice" value={ltcgformData.salePrice} onChange={handleLTCGChange}/>
                </label>
                <label htmlFor="acquisition">
                    Cost of Acquisition:
                    <input type="number" name="acquisition" value={ltcgformData.acquisition} onChange={handleLTCGChange}/>
                </label>
                <label htmlFor="improvementCost">
                    Improvement Cost:
                    <input type="number" name="improvementCost" value={ltcgformData.improvementCost} onChange={handleLTCGChange}/>
                </label>
                <label htmlFor="commission">
                    Brokerage/Commission:
                    <input type="number" name="commission" value={ltcgformData.commission} onChange={handleLTCGChange}/>
                </label>
                <input type="submit" value="Submit" />
                <h4>Net long term capital gains: {ltcg}</h4>
                <h4>LTGC Tax applicable: {ltcgTax}</h4>
            </form>
        </div>
    </div>
  )
}

export default CapitalGains