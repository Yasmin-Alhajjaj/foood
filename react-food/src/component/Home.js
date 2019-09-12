import React from "react";
//import { BrowserRouter as Router, Route,Link } from 'react-router-dom';

import {  NavLink } from "react-router-dom";

export default function About() {
  
    
  return(
 <div  >
  {/* <Link to="/"> */}
  {/* <h1>Home</h1> */}
  <center>
  <div className="FormTitle">
              <NavLink
                to="/sign-in"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>
            </center>


  {/* </Link> */}
  </div>
  ); 

}
