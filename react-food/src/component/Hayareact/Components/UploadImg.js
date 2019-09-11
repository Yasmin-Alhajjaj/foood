import React, { Component } from 'react';
import axios from 'axios'

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

componentWillMount(url){
  axios.post('http://localhost:9000/post/url', url)
  .then(res => this.setState({}))
}

render() {
  let {imageUrl} = this.state;
      let $image = null;
      if (imageUrl) {
        $image = (<div style={{border: '2px solid blue'}}><img style={{ width: '100px', height: '100px'}} src={imageUrl} /></div>);
      } else {
        $image = (<p>Please upload your meal photo</p>);
      }
    return (
      <>
        <input
	    	style={{display: 'none'}}
            type="file" 
            onChange={(e)=>this.handleImageChange(e)}
            ref={input => this.input = input}/>
        <button onClick={()=>this.input.click()}>Upload Image</button>
        {$image}
      </>
    )
}
}