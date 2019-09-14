import React, { Component } from 'react'
import axios from 'axios'
import "../App.css";

export default class Counter extends Component {
  state = {
    counter: 'number'
  }

  componentWillMount(){
    axios.get('http://localhost:9000/post/all')
    .then(res => this.setState({counter: res.data.length}))
    .catch(err => console.log(err))
  }


    render(){
        return(
            <>
              {/* <div style={{borderRadius: '30%',fontSize:"19px", color:"white" ,display: 'inline',padding: '7px', backgroundColor: 'blue', width:"100px"}}>
                {this.state.counter} donors
              </div> */}

              {/* <div className="spinner-border" style={{width: "3rem", height: "3rem" , padding:"12px" }} role="status">
  <span className="sr-only">Loading...</span><h3 style={{position:"fixed"}} >{this.state.counter}</h3> 
</div> */}

<div className="container">
	<div className="row">
		<div className="container">
	<div className="row">
	<a href="#" className="intro-banner-vdo-play-btn pinkBg" target="_blank">
<i className="glyphicon glyphicon-play whiteText" aria-hidden="true"></i>{this.state.counter}
<span className="ripple pinkBg"></span>
<span className="ripple pinkBg"></span>
<span className="ripple pinkBg"></span>
</a>
	</div>
</div>

</div></div>





            </>
        )
    }
}