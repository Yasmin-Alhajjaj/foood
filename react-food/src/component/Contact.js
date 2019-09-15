import React from "react";
import "../App.css";
export default function Contact() {
  
    
  return(
    <div className="about">
    <div 
    className="contact"
    style={{
      width: '50%',
      padding: '70px',
      fontSize: '1.5em', 
      borderRadius: '10px'}} >
​
  
<h1 style={{fontFamily: 'Acme, sans-serif', color: '#074F33'}}>Contact Us</h1><br/><br/>
    <p style={{fontFamily: 'Acme, sans-serif', color:'#074F33'}}>
      We appreciate your feedback and work hard to respond to all email inquiries promptly. In order to help us respond to your message efficiently, please utilize the appropriate email addresses below.
      <br/><br/>
      Have a great personality and want to become volunteer? Want more info about our process? For any content comments or questions, please contact our Editorial team at <a href="mailto:editorial@ourfood.com">editorial@ourfood.com</a>.
      <br/><br/>
      For all advertising inquires, please contact Oola at <a href="mailto:advertise@ourfood.com">advertise@ourfood.com</a>
      <br/><br/>
      To report any technical issues, please contact Oola at <a href="mailto:support@ourfood.com">support@ourfood.com</a>.
      <br/><br/>
    </p>
  </div>
  </div>
  ); 
}