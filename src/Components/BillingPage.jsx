import React, { useState } from 'react'
import "../css/BillingPage.css";
import captchaImg from "../images/captcha.png";
import { Box, Button, Icon, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useDisclosure, useSteps} from '@chakra-ui/react';
import {FaCheckCircle} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const steps = [
    { title: 'First', description: 'Login' },
    { title: 'Second', description: 'Calculate Tax' },
    { title: 'Third', description: 'Payment' },
]

const BillingPage = () => {

    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);

    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [pan, setPan] = useState("");
    const [amount, setAmount] = useState("");
    const [mobile, setMobile] = useState("");
    const [assessmentYear, setAssessmentYear] = useState("");

    const { activeStep, setActiveStep } = useSteps({
        index: 2,
        count: steps.length,
    });

    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const handlePayment1 = () => {
        setShowDropdown1(true);
        setShowDropdown2(false);
    }

    const handlePayment2 = () => {
        setShowDropdown2(true);
        setShowDropdown1(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setActiveStep(activeStep + 1);
        onOpen();

        setFName("");
        setLName("");
        setPan("");
        setMobile("");
        setAmount("");
        setAssessmentYear("");

        setTimeout(() => {
            navigate("/")
        }, 3000);

    }

    return (
        <div className="billing-container">
            <h1 className="billing-heading">e-Pay Tax</h1>

            <Stepper index={activeStep}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>

                        <Box flexShrink='0'>
                            <StepTitle style={{ borderBottom: "none" }}>{step.title}</StepTitle>
                            <StepDescription style={{ fontSize: "18px", fontWeight: "600", fontFamily: "'Montserrat', sans-serif" }}>{step.description}</StepDescription>
                        </Box>

                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
            
            <form id="billing-form" onSubmit={handleSubmit}>
                <div className="form-address">
                    <input type="text" placeholder="First Name" required className="input-address" value={fname} onChange={e => setFName(e.target.value)}/>
                    <input type="text" placeholder="Last Name" required className="input-address" value={lname} onChange={e => setLName(e.target.value)}/>
                    <input type="text" placeholder="PAN" required className="input-address" value={pan} onChange={e => setPan(e.target.value)}/>
                    <input id="tax-amount" type="text" placeholder="Tax Amount" required className="input-address" value={amount} onChange={e => setAmount(e.target.value)}/>
                    <select name="assessment-year" id="assessment-year" className="input-address" value={assessmentYear} onChange={e => setAssessmentYear(e.target.value)}>
                        <option value="">Assessment Year</option>
                        <option value="2023-2024">2023-2024</option>
                        <option value="2022-2023">2022-2023</option>
                        <option value="2021-2022">2021-2022</option>
                        <option value="2020-2021">2020-2021</option>
                        <option value="2019-2020">2019-2020</option>
                        <option value="2018-2019">2018-2019</option>
                        <option value="2017-2018">2017-2018</option>
                    </select>
                    <input type="text" placeholder="Mobile Number" required className="input-address" value={mobile} onChange={e => setMobile(e.target.value)}/>
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



                <h3 className="payment-heading">Payment Method</h3>
                <div>
                    <table id="payment_table">
                        <tr>
                            <td className="payment_td">
                                <div className="credit">
                                    <input type="radio" name="option" onClick={handlePayment1} />
                                    <img src="https://www.aeropostale.com/on/demandware.static/Sites-aeropostale-Site/-/default/dwe33d2fc5/images/cc_icon.svg" alt="credit-card" />
                                    <span className="payment-text">Credit Card</span>
                                </div>
                                <div id="dropdown1" style={{ display: showDropdown1 ? "block" : "none" }}>
                                    <form id="credit-card-payment-form">
                                        <input type="text" placeholder="Name on Card" className="credit-input" />
                                        <select className="credit-input">
                                            <option value="visa">Visa</option>
                                            <option value="americanexpress">American Express</option>
                                            <option value="mastercard">Master Card</option>
                                            <option value="discover">Discover</option>
                                            <option value="jcb">JCB</option>
                                        </select>

                                        <input type="text" placeholder="Card Number" className="credit-input" />
                                        <input type="text" placeholder="CVV" className="credit-input" />
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
                                    <input type="radio" name="option" onClick={handlePayment2} />
                                    <img src="https://www.aeropostale.com/on/demandware.static/Sites-aeropostale-Site/-/default/dw772bfea5/images/paypal_icon.png" alt="paypal" />
                                    <span className="payment-text">Pay Pal</span>
                                </div>
                                <div id="dropdown2" style={{ display: showDropdown2 ? "block" : "none" }}>
                                    <button id="button_img">
                                        <img src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_960_720.png" alt="paypal-img" />
                                    </button>
                                    <p>The safer, and easy way to pay</p>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <button id="pay-tax-btn" type="submit" disabled={(fname.length !== 0 && lname.length !== 0 && pan.length !== 0 && amount.length !== 0 && mobile.length !== 0) ? false : true}>Pay Tax</button>
            </form>
            <Modal onClose={onClose} isOpen={isOpen} isCentered size={'lg'}>
                <ModalOverlay />
                <ModalContent>
                    {/* <ModalCloseButton /> */}
                    <ModalBody style={{display: "flex", flexDirection: "column", alignItems: "center", padding:"30px"}}>
                        <Icon as={FaCheckCircle} style={{color: "green", fontSize: "70px"}}/>
                        <p style={{paddingTop: "30px", fontSize: "30px"}}>Payment Successful</p>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default BillingPage