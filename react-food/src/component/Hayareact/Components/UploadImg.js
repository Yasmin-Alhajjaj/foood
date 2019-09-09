import React, { Component } from 'react';

export default class UploadImg extends Component{
    state = {
        file: '',
    imageUrl: ''
};

handleImageChange = (e) => {
  e.preventDefault();

  let reader = new FileReader();
  let file = e.target.files[0];

  reader.onloadend = () => {
    this.setState({
      file: file,
      imageUrl: reader.result
    });
  }
  // console.log(reader)
  reader.readAsDataURL(file)
}

render() {
    return (
        <input
            type="file" 
            onChange={(e)=>this.handleImageChange(e)}
            ref={input => this.input = input}/>
    )
}
}