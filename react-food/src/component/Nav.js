import React from "react";
import { Link } from 'react-router-dom';

import Counter from './Counter'

export default function Nav() {
  
    
      return(
          <>

     {/* <nav style={{  display:"flex", justifyContent:"space-around" }} >

     <ul style={{ backgroundColor:"grey", gridColumn:"2/4",width:"100%", display:"flex", justifyContent:"space-between", listStyle:"none", position:"relative" }} >
     <Link style={{ color:"white" }} to="/" ><li>Home</li> </Link> 
     || <Link style={{ color:"white" }} to="/About" > <li>About</li> </Link>  
     ||<Link style={{ color:"white" }} to="/Contact" ><li>Contact</li></Link> 
     <h1 style= {{ display:"flex", alignItems:"flex-end" , justifyContent:"center" }}>your food is my food</h1>
     <Counter/>

     </ul>


      </nav> */}
<nav className="navbar navbar-expand-lg navbar-light bg-light row">
 <h1 className="col-4" >your food is my food</h1>
 <div className="col-4" ><div className="spinner-grow text-primary" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-success" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-warning" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-info" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-dark" role="status">
  <span className="sr-only">Loading...</span>
</div>
<div className="spinner-grow text-light" role="status">
  <span className="sr-only">Loading...</span>
</div></div>

<div className="collapse navbar-collapse row" id="navbarNav">
<ul className="navbar-nav">
<Link  to="/" > <li className="nav-item active  col-2 ">Home</li> </Link>
<Link  to="/About" > <li className="nav-item col ">About Us</li> </Link>
<Link to="/Contact" ><li className="nav-item col">Contact Us</li></Link>

</ul>
<Counter/>
</div>
</nav>







      </>
      ); 
    
  }
  
