import React, { Component } from "react";
//import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import "../App.css";
// let Background = '../home/owner/Downloads/output.png'
export default class About extends Component{
  // state = {
  //   videoURL: './home/owner/Downloads/Backyard_4K_Living_Background.mp4'
  // }
  
  render(){
  return(
    <div className="about">
    {/* <video id="background-video" loop autoPlay>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video> */}
 <div 
 style={{
   //margin: '0 auto',
   //marginTop: '80px',
   width: '50%',
   //border: '3px solid #BAAFC4', 
   padding: '58px', 
   paddingBottom:"1px",
   //borderRadius: '10px',
   fontSize: '1.5em' ,
   //backgroundColor:"white",
  // opacity:"0.5",

  //  backgroundImage: `url(${Background})`
  }} >
    <h1 style={{
      fontFamily: 'Acme, sans-serif', 
      color: '#074F33'
      }}>
      About Us</h1><br/>
   <div><h3 style={{fontFamily: 'Acme, sans-serif', color:'#074F33'}}>Who we are..</h3></div>
   <br/>
  <div> 
  <p style={{fontFamily: 'Acme, sans-serif', color:'#074F33'}}>Your food is my food is an Youth Initiative aim to eliminate the Community stratification, and incourage feeling with others. <br/><br/>
  This Initiative focuses on three main issuues in the society, and keep trying to solve it!<br/><br/>
  First One: <br/>
  trade of the bad happet of throwing the exeeds food in the garbage! So we offer this people with another chose to dealing with food<br/><br/>
  Second:<br/>
  Facilitate reaching the food for needy people, wihtout any embarrassment or Diminish them, and with the easest way!<br/><br/>
  Third and Last One:<br/>
  Install the spirit of cooperation betwwen the members of society, and make every one feel with others!</p>
  </div>
  </div>
  </div>
  ); 
  }
}