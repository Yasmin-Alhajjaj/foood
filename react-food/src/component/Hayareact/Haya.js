
import React, { Component } from "react";
// import axios from "axios";
import UploadImg from './Components/UploadImg'
import Counter from './Components/Counter'
// import TestOnForm from './Components/TestOnForm'
export default class App extends Component {
    state = {};
  
    render() {
      return(
     <>
      <UploadImg />
      <Counter />
      {/* <TestOnForm/> */}
      </>
      ); 
    }
  }
  
