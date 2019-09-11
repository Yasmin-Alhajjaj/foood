import React, { Component } from 'react';
import axios from 'axios';

export default class Input extends Component {
    state={
        namefood :"",
        amount:"",
        description:"",
        location:"",
        booking: true
    };

    handleInput = e => {
        e.preventDefault();
        if(e.target.name==="se"){
          this.state.location=e.target.value
        }
        
        console.log('ffff', e.target.name)
        console.log('object', e.target.value)
       this.setState({ [e.target.name] : e.target.value})
       console.log('this.state', this.state)
         
      };
      Share= (newPost) => {
        //  e.preventDefault();
            axios.post(`http://localhost:9000/post/post`,newPost)
            .then(res => {
              console.log('res.data', res.data)
                this.state=res.data
            })
            .catch(err => {
              console.log(err);
            });

      }
    
    render() {
        // console.log('state', this.state)
        return (
            <div>
                <form
          style={{
            padding: "25px"
          }}
          className="form-inline align-self-center"
          onSubmit={this.handleInput}
        >
          <div className="input-group">
            <input
           
              className="m-2"
              type="text"
              placeholder="namefood"
              name="namefood"
              onChange={this.handleInput}
            />
            <input
            
              className="m-2"
              type="text"
              placeholder= "amount"
              onChange={this.handleInput}
              name="amount"
            />
             <input
            
              className="m-2"
              type="text"
              placeholder="description"
              onChange={this.handleInput}
              name="description"
            />
            <select
              onChange={this.handleInput}
              className="custom-select m-2"
              name="se"
            >
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
            <button
              className="btn btn-outline-success btn-lg"
              type="submit"
              onClick={this.Share.bind(this,this.state)}
            >
             Share
            </button>
          </div>
        </form>


             
            </div>
        )
    }
}
