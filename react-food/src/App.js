
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Search from './component/Search'
import Nav from './component/Nav'
import About from './component/About'
//import Home from './component/Home'
import Contact from './component/Contact'

import "./App.css";

//////////ahmad
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
///////////
//import Counter from './component/Counter'
import Input from './component/Input'
import PostItem from './component/PostItem'
import Footer from './component/Footer'

import Searchitem from './component/Searchitem'

//import {  NavLink } from "react-router-dom";

export default class App extends Component {
    state = {
      user:[],
      linkLogin: "/Input",
      Home:"/sign-in"

    };
  
    ////////////ahmad/////signup
    newuser=(firstName,lastName,phone,email,password,e)=>{
      e.preventDefault();
      axios.post(`http://localhost:9000/user/${firstName}/${lastName}/${phone}/${email}/${password}`)
      .then(response => {
        // this.setState({ user: response.data });
        alert( `sucssfuly to Creat the new acount`)
        window.location = this.state.Home;
      });
   
  };
render() {
      return(
        // <>
      <Router >

        <Nav/>


  <Route path="/About"  component={About} />
  <Route path="/Contact"  component={Contact} />
  <Route path="/Input"  component={Search} />
  <Route path="/Input"  component={Input} />
  <Route path="/Input"  component={PostItem} />
  <Route exact path="/" component={() => <SignUp newuser={this.newuser}/>} />
  <Route path="/sign-in" component={SignIn}/>
  <Route path="/Searchitem"  component={Searchitem} />      





        <Footer/>

     
     </Router>
      // </>
      ); 
    }
  }
