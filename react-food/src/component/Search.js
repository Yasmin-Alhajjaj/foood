import React, { Component } from 'react'
import axios from 'axios'
import Searchitem from './Searchitem'
import { BrowserRouter as Router, Route} from 'react-router-dom';

export default class Search extends Component {
    state = {
      search:"",
      alllocation:[],
      linksearch: "/Searchitem"
    };

    change=(e)=>{
      this.setState({
        search: e.target.value
      })
    }
  
    searchloc=(location)=>{
       axios.get(`http://localhost:9000/post/${location}`)
       .then(res => {
        this.setState({ alllocation: res.data });
       console.log('Poalllocationst', this.state.alllocation)
    })
     .catch(err => {
       console.log(err);
     });
        }


    render() {
      return(
     <>
     <div className="row" >    
     <select
            value={this.state.search}
              onChange={this.change}
              className="custom-select m-2 col-11"
              name="search"   
            >  
              <option value="cuontry">Search by Country</option>
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


     <button className="btn" onClick={this.searchloc.bind(this,this.state.search)}  ><i className="fa fa-search"></i></button>
     </div>
     {this.state.alllocation.map((alllocation, key) =>
              <Router>
                <Route component={
                  () =>
                    <Searchitem
                      key={key}
                      alllocation={alllocation} />}
                />
              </Router>
            )
            } 
      </>
     ); }}
