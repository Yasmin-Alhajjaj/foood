import React, { Component } from 'react'
import axios from 'axios'

export default class Yasmin extends Component {
    state = {
      search:"",
      alllocation:[]
    };


    change=(e)=>{
      this.setState({
        search: e.target.value
      })

    
    }
  
    // searchloc=(location)=>{
    //    axios.get(`http://localhost:9000/post/${location}`)
    //    .then(res => {
    //     this.setState({ alllocation: res.data });
    //    console.log('Poalllocationst', this.state.alllocation)
    // })
    //  .catch(err => {
    //    console.log(err);
    //  });

    // }


    render() {
      console.log(this.state.search)
      return(
     <div >
     <div className="row" >

     {/* <input type="text" value={this.state.search} placeholder="Search about country" onChange={this.change} /> */}
    
     <select

            value={this.state.search}
              onChange={this.change}
              className="custom-select m-2 col-11"
              name="search"
              
            >
              
              <option value="cuontry">Country</option>
              <option name='Irbid' >Irbid</option>
              <option name='Jarash' >Jarash</option>
              <option name='Az-Zarqa' >Az-Zarqa</option>
              <option name='Tafelh' >Tafelh</option>
              <option name='Ajloun' >Ajloun</option>
              <option name='Aqaba' >Aqaba</option>
              <option name='Amman' >Amman</option>
              <option name='Karak' >Karak</option>
              <option name='Madba' >Madba</option>
              <option name='Ma`an' >Ma`an</option>
              <option name='Mafraq' >Mafraq</option>
              <option name='Jarash' >Jarash</option>
            </select>

            <button className="btn"   ><i className="fa fa-search"></i></button>

     {/* <button className="btn" onClick={this.searchloc.bind(this,this.state.search)}  ><i className="fa fa-search"></i></button> */}
     </div>

      </div>
      ); 
    }
  }
