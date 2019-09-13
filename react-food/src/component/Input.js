import React, { Component } from 'react';
import axios from 'axios';
const input = {
  border : '1px solid #2A7E7C',
  margin: '10px',
  width: '225px',
  height: '40px'       
}
const btn = {
  width: '200px',
  height: '50px',
  margin: '0 auto'
}
const imageBackground = 'https://media.gettyimages.com/photos/sharing-food-picture-id825855446?s=612x612'
export default class Input extends Component {
  state={
    form:{
      namefood :"",
      amount:"",
      description:"",
      location:"",
      file: '',
      imageUrl: 'data:image/png;base64,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',
      booking: true}
    };


    clean=()=>{

      this.setState({
        form:{
        ...this.state.form, 
        namefood :"",
        amount:"",
        description:"",
        location:"",
        file: '',
        imageUrl: 'data:image/png;base64,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',
        booking: true
      }
      })
    }
    
    handleInput = e => {
      //  e.preventDefault();
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
      console.log('this.state', this.state)
    }
      Share= (newPost,clean) => {
            axios.post(`http://localhost:9000/post/post`,newPost)
            .then(res => {
              console.log('res.data', res.data)
              // this.state.form=res.data
              this.setState({form: res.data})
              console.log('this.state', this.state)})
            .catch(err => {
              console.log(err);
            })
            clean()
          }
      handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file)
        reader.onloadend = () => {
            this.setState({form: { 
              ...this.state.form,
              file: file.name,
              imageUrl: reader.result}
           })        }
        reader.readAsDataURL(file)
      }
    render() {
      let {imageUrl} = this.state.form;
      let $image = null;
      if (imageUrl) {
        $image = (<img alt="" style={{border:'1px solid #2A7E7C',borderRadius: '5px ', width: '200px', height: '200px', margin: '20px'}} src={imageUrl} />);
      } else {
        $image = (<img alt="" style={{border:'1px solid #2A7E7C',borderRadius: '5px ', width: '200px', height: '200px', margin: '20px'}} src='https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg'></img>);
      }
        return (
        <div style={{
          border: 'solid 1px grey',
          borderRadius: '7px',
          margin: '0 auto',
          // width: '60%',
          height: '450px',
          display: 'grid',
          padding: '30px',
          // justifyContent: 'space-around',
          backgroundImage: `url(${imageBackground})`,
          gridTemplateColumns: '1fr'}}>
            {/* <img style={{maxWidth: '100%', maxHeight: '100%'}} src='https://commitchange.s3.amazonaws.com/uploads/campaigns/main_image/2427/Dinner.jpg'></img> */}
         
         
         <div  style={{
              padding: "25px",
              gridColumn: '1/2',
              display: 'grid',
              justifyContent: 'space-around',
              gridTemplateColumns: '1fr 1fr',

            }}>
         
          <form
            // style={{
            //   padding: "25px",
            //   gridColumn: '1/2',
            //   display: 'grid',
            //   justifyContent: 'space-around',
            //   gridTemplateColumns: '1fr 1fr',

            // }}
            // className="form-inline align-self-center"
             onSubmit={this.handleInput}
          >

          <div 
            style={{
              gridColumn: '2/3', 
              display: 'grid', 
              justifyContent: 'center',
              backgroundColor: '#1D6161',
              borderRadius: '10px',
              opacity: '0.7', 
              width: '70%'
              }}>
            <input
              // className="m-2"
              type="text"
              placeholder="Food Type"
              name="namefood"
              onChange={this.handleInput}
              style={input}
              value={this.state.form.namefood}
            />
            <input
              // className="m-2"
              type="text"
              placeholder= "Amount"
              onChange={this.handleInput}
              name="amount"
              style={input}
              value={this.state.form.amount}

            />
             <input
            
              // className="m-2"
              type="text"
              placeholder="Brief Description"
              onChange={this.handleInput}
              name="description"
              style={input}
              value={this.state.form.description}

            />
            <select
              style={input}
              onChange={this.handleInput}
              className="custom-select mr-sm-2"
              name="location"

              // style={{display: 'block', width: '225px', margin: '0 auto'}}
            >
              <option name='select' >Select country</option>
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
            {/* <button 
              style={{
                margin: '10px',
                width: '225px',
                height: '40px'
              }} 
              className='btn btn-info'>
              Location!!
            </button> */}
              <button
                style={{width: '100px',
                height: '80px',
                margin: '0 auto'}}
                className="btn btn-success btn-lg"
                type="submit"
                onClick={this.Share.bind(this,this.state.form,this.clean)}>
                Share
              </button>
          </div>
​        </form> 

          <div
            style={{
              gridColumn: '1/2', 
              gridRow: '1', 
              display: 'grid', 
              justifyContent: 'center',
              backgroundColor: '#1D6161',
              borderRadius: '10px',
              opacity: '0.7',
              padding: '30px',
              width: '70%'}}
          >
            <input
              style={{display: 'none'}}
              type="file" 
              onChange={(e)=>this.handleImageChange(e)}
              ref={input => this.input = input}/>
            {$image}
          <button
            style={btn}
           className="btn btn-danger btn-lg"
           onClick={()=>this.input.click()}>Upload Image
          </button>
          </div>  
          </div>        
            </div>
        )
    }
}