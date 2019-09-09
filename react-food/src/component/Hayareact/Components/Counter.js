import React, { Component } from 'react'
// import React, { Component } from 'react';
import axios from 'axios'

export default class Counter extends Component {
  state = {
    counter: 'number'
  }

componentWillUnmount(){
  axios.get('http://localhost:9000/all')
  .then(res => {this.setState({counter: res.data})
  console.log('res.data' ,res)}
  )
  console.log('this.state.counter' ,this.state.counter)
}


    render(){
        return(
            <>
              <div>
                Counter
                {this.state.counter}
                {console.log('this.state.counter = ' ,this.state.counter)}
              </div>
            </>
        )
    }
}