import React, { useState } from 'react'
import "../css/BillingPage.css";
import captchaImg from "../images/captcha.png";

const BillingPage = () => {

    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);


    const handlePayment1 = () => {
        setShowDropdown1(true);
        setShowDropdown2(false);
    }

    const handlePayment2 = () => {
        setShowDropdown2(true);
        setShowDropdown1(false);
    }

    return (
        <div className="billing-container">
            <h1 className="billing-heading">Billing Page</h1>
            <form id="billing-form">
                <div className="form-address">
                    <input type="text" placeholder="First Name" required className="input-address" />
                    <input type="text" placeholder="Last Name" required className="input-address" />
                    <input type="text" placeholder="Address" required className="input-address" />

                    <input id="city" type="text" placeholder="City" required className="input-address" />
                    <input id="zip" type="text" placeholder="Zip Code" required className="input-address" />
                    <input type="text" placeholder="Mobile Number" required className="input-address" />
                </div>


                <div id="robot">
                    <div id="captcha">
                        <input type="checkbox" name="check" />
                        <label for="check">I'm not a robot</label>
                    </div>

                    <div id="captcha-img">
                        <img src={captchaImg} alt="captcha-img" />
                    </div>
                </div>



                <h3> Payment Method</h3>
                <div>
                    <table id="payment_table">
                        <tr>
                            <td className="payment_td">
                                <div className="credit">
                                    <input type="radio" name="option" onClick={handlePayment1} />
                                    <img src="https://www.aeropostale.com/on/demandware.static/Sites-aeropostale-Site/-/default/dwe33d2fc5/images/cc_icon.svg" alt="credit-card" />
                                    <span className="payment-text">Credit Card</span>
                                </div>
                                <div id="dropdown1"  style={{ display: showDropdown1 ? "block": "none"}}>
                                    <form id="credit-card-payment-form">
                                        <input type="text" placeholder="Name on Card"  className="credit-input"/>
                                        <select className="credit-input">
                                            <option value="visa">Visa</option>
                                            <option value="americanexpress">American Express</option>
                                            <option value="mastercard">Master Card</option>
                                            <option value="discover">Discover</option>
                                            <option value="jcb">JCB</option>
                                        </select>

                                        <input type="text" placeholder="Card Number"  className="credit-input"/>
                                        <input type="text" placeholder="CVV"  className="credit-input"/>
                                        <select className="credit-input">
                                            <option value=''>Month</option>
                                            <option value='1'>Janaury</option>
                                            <option value='2'>February</option>
                                            <option value='3'>March</option>
                                            <option value='4'>April</option>
                                            <option value='5'>May</option>
                                            <option value='6'>June</option>
                                            <option value='7'>July</option>
                                            <option value='8'>August</option>
                                            <option value='9'>September</option>
                                            <option value='10'>October</option>
                                            <option value='11'>November</option>
                                            <option value='12'>December</option>
                                        </select>
                                        <select className="credit-input">
                                            <option value="">Year</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                            <option value="2030">2030</option>
                                            <option value="2031">2031</option>
                                            <option value="2032">2032</option>
                                            <option value="2033">2033</option>
                                            <option value="2034">2034</option>
                                            <option value="2035">2035</option>
                                        </select>
                                    </form>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="payment_td">
                                <div className="credit">
                                    <input type="radio" name="option" onClick={handlePayment2}/>
                                    <img src="https://www.aeropostale.com/on/demandware.static/Sites-aeropostale-Site/-/default/dw772bfea5/images/paypal_icon.png" alt="paypal" />
                                    <span className="payment-text">Pay Pal</span>
                                </div>
                                <div id="dropdown2" style={{ display: showDropdown2 ? "block": "none"}}>
                                    <button id="button_img">
                                        <img src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_960_720.png" alt="paypal-img" />
                                    </button>
                                    <p>The safer, and easy way to pay</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <button id="pay-tax-btn">
                    <a href="./thankyou.html">Pay Tax</a>
                </button>
            </form>
        </div>
    )
}

export default BillingPage