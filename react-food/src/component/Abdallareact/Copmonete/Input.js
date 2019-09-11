import React, { Component } from 'react';
import axios from 'axios';

export default class Input extends Component {
<<<<<<< HEAD
    state={
        namefood :"",
        amount:"",
        description:"",
        location:"",
        booking: true
=======
  state={
    form:{
      namefood :"",
      amount:"",
      description:"",
      location:"",
      file: '',
      imageUrl: '',
      booking: true}
>>>>>>> fullstack image uplouad
    };

    handleInput = e => {
        e.preventDefault();
<<<<<<< HEAD
        if(e.target.name==="se"){
          this.state.location=e.target.value
        }
        
        console.log('ffff', e.target.name)
        console.log('object', e.target.value)
       this.setState({ [e.target.name] : e.target.value})
       console.log('this.state', this.state)
         
      };
      Share= (newPost) => {
        // e.preventDefault();
            axios.post(`http://localhost:9000/post/post`,newPost)
            .then(res => {
              console.log('res.data', res.data)
                this.state=res.data
=======
        let name = e.target.name
        let value = e.target.value
        if(name === "location"){
          this.state.form.location = e.target.value
        }else{
         this.setState({form: { 
           ...this.state.form,
          [name] : value}
        })
      }
    }

      Share= (newPost) => {
            axios.post(`http://localhost:9000/post/post`,newPost)
            .then(res => {
              console.log('res.data', res.data)
                this.state.form=res.data
>>>>>>> fullstack image uplouad
            })
            .catch(err => {
              console.log(err);
            });
<<<<<<< HEAD

      }
    
    render() {
        // console.log('state', this.state)
        return (
            <div>
=======
      }

      handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({form: { 
              ...this.state.form,
              file: file,
              imageUrl: reader.result}
           })        }
        reader.readAsDataURL(file)
      }

    render() {
      let {imageUrl} = this.state.form;
      let $image = null;
      if (imageUrl) {
        $image = (<div style={{border: '2px solid blue'}}><img style={{ width: '100px', height: '100px'}} src={imageUrl} /></div>);
      } else {
        $image = (<p>Please upload your meal photo</p>);
      }
        return (
            <div style={{border: 'solid 2px black'}}>
>>>>>>> fullstack image uplouad
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
              name="location"
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
            <input
	    	    style={{display: 'none'}}
            type="file" 
            onChange={(e)=>this.handleImageChange(e)}
            ref={input => this.input = input}/>
            <button
            className="btn btn-outline-success btn-lg"
            onClick={()=>this.input.click()}>Upload Image</button>
            {console.log('this.state.form', this.state.form)}     
            {console.log('this.state.form.imageUrl', this.state.form.namefood)}   
            {$image}

            <h1>haya:{this.state.form.imageUrl}</h1>
            <button
              className="btn btn-outline-success btn-lg"
              type="submit"
              onClick={this.Share.bind(this,this.state.form)}>
             Share
            </button>
          </div>
        </form> 
            </div>
        )
    }
}
