import React, { Component } from "react";
import "../App.css";


export default class About extends Component{
  render(){
  return(
    <div className="about">
 <div 
 style={{
   width: '50%',
   padding: '58px', 
   paddingBottom:"1px",
   fontSize: '1.5em' ,
  }} >
    <h1 style={{
      fontFamily: 'Acme, sans-serif', 
      color: '#074F33'
      }}>
      About Us</h1><br/>
   <div><h3 style={{fontFamily: 'Acme, sans-serif', color:'#074F33'}}>Who we are..</h3></div>
  <div> 
  <p style={{fontFamily: 'Acme, sans-serif', color:'#074F33'}}>Hungry Free is an Youth Initiative aim to eliminate the Community stratification and encourage feelings with others. <br/><br/>
  This Initiative focuses on three main issuues in the society, and keep trying to solve it!<br/><br/>
  First One: <br/>
  trade of the bad happet of throwing the exceeds food in the garbage! So we offer this people with another chose to dealing with food<br/><br/>
  Second:<br/>
  Facilitate reaching the food for needy people, without any embarrassment or Diminish them, and with the easiest way!<br/><br/>
  Third and Last One:<br/>
  Install the spirit of cooperation between the members of society, and make everyone feel with others!</p>
  </div>
  </div>
  </div>
  ); 
  }
}