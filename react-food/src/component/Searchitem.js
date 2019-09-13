
import React, { Component } from 'react'
//import Navbar from 'react-bootstrap/Navbar'
//import { BrowserRouter as Router,Link } from 'react-router-dom';
//import Search from './Search'

export default class Searchitem extends Component {
    state = {
      alllocation:[]
    };

    render() {


      if(this.props.alllocation === undefined)
  return null;
        return(

       <div  key={this.props.alllocation.key} className="row postitem row" style={{display:"flex"}} >

       <div className="col-4" style={{ marginTop:"30px" ,display:"flex" , justifyContent:"space-around"}} >
           <div className="card" style={{ width: "25rem",border: 'solid 1px black' }}>
             <img src={this.props.alllocation.imageUrl}  className="card-img-top" alt=""/>
             {/* {$image} */}
             <div className="card-body" style={{textAlign:"right" }}  >
               <h5 className="card-title">{this.props.alllocation.namefood}</h5>
               <p className="card-text"><span style={{color:"gray",fontSize:"13px" }} > {this.props.alllocation.description}</span>  </p>
               </div>
               <ul className="list-group list-group-flush">
               <li className="list-group-item"><span style={{color:"gray"}} >amount:  </span> {this.props.alllocation.amount}</li>
               <li className="list-group-item"> <span style={{color:"gray"}} >location: </span> {this.props.alllocation.location}</li>
               </ul>
               <div className="card-body" >
               {/* <button  className="card-link">{this.props.alllocation.booking}</button> */}
              <button className="btn btn-dark"  style={{width:"100%" , color:(this.props.alllocation.booking)?"green":"red"  }}  >BOOKING</button>
               </div>
               </div>{this.props.alllocation.booking}
             </div>
            
            
            
            
            
            
            
            {/* <Link to="/Input">
   <button type="button" className="btn btn-primary" style={{marginRight:"10px"}}>Back</button>
   </Link> */}



           </div>
        )}}