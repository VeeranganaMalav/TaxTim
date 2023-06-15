import React from 'react'
import {Link} from "react-router-dom";
import {FaFrown, FaGlasses} from "react-icons/fa"
import "../css/Contact.css"

export const Contact = () => {
  return (
    <div className='section'>
      <div>
      <h1 className='heading'>Got something to say?</h1>
      <h2>Please contact us with any questions, comments, requests, criticisms or complaints!</h2>

      </div>
      <div>
        <div>
      <b> <FaGlasses  />Contact Qualified Staff via our Helpdesk</b>
      <br />
        <p>Ask one of our qualified tax professionals your question and we'll get back to you with an informed answer.</p>
         <br />
        
         <Link to = "https://www.taxtim.com/za/help/ask-a-tax-question"><button>Ask a Tax Professional</button></Link>
         </div>
         <div>
            <br />
            <br />
         <b> <FaFrown />Make a Complaint</b>
          <p>Something go wrong? Contact one of our customer service agents and we will gladly attend to your problem.</p>
           <br />
          
           <Link to = "https://www.taxtim.com/za/help/ask-a-tax-question?ask=expert#tax-question-form-section"><button>Let us know</button></Link>
         </div>
      </div>

    </div>
  )
}
