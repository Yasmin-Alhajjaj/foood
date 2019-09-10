import React, { Component } from 'react'
import axios from 'axios'

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
              <div style={{borderRadius: '50%',display: 'inline',padding: '10px', backgroundColor: 'red'}}>
                {this.state.counter}
              </div>
            </>
        )
    }
}