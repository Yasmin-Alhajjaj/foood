import React, { Component } from 'react'
import axios from 'axios'
import "../App.css";

export default class PostItem extends Component {
 state = {
   posts: []
 };

 componentDidMount=()=> {
 // console.log(this.props.location.state[0].phone);
  //console.log(this.props.location.state[0].firstName);

   axios
     .get("http://localhost:9000/post/all")
     .then(res => {
       this.setState({ posts: res.data });
       //console.log('Post', this.state.posts)
     })
     .catch(err => {
       console.log(err);
     });
 }

update=(bookedup,name,phone)=>{
  axios.put(`http://localhost:9000/post/${bookedup}`)
  .then(res => {
    this.setState({ posts: res.data });
    console.log('Post', this.state.posts)
  })
  .catch(err => {
    console.log(err);
  });
  alert( `name: ${name} 
   phone: ${phone} `)




}

 render() {
   return (
     <div className="row postitem" style={{display:"flex"}} >
       {this.state.posts.map((post,key) => {
         
         return (
           <div key={key} className="col-4" style={{ marginTop:"30px" ,display:"flex" , justifyContent:"space-around"}} >
           <div className="card hoverr" style={{ width: "25rem",borderRadius:"10px", backgroundColor:"#F5FEFE"
 }}>
             <img src={post.imageUrl}  className="card-img-top" alt="" style={{ height: "17rem", }}/>
             <div className="card-body" style={{textAlign:"right" }}  >
               <h5 className="card-title">{post.namefood}</h5>
               <p className="card-text"><span style={{color:"gray",fontSize:"13px" }} > {post.description}</span>  </p>
               </div>
               <ul className="list-group list-group-flush">
               <li className="list-group-item"style={{ backgroundColor:"#F5FEFE"  }} ><span style={{color:"gray"}} >amount:  </span> {post.amount}</li>
               <li className="list-group-item"style={{ backgroundColor:"#F5FEFE"  }}> <span style={{color:"gray"}} >location: </span> {post.location}</li>
               </ul>
               <div className="card-body" >
              <button className="btn btn-dark" onClick={this.update.bind(this,post._id,post.firstName,post.phone)}  style={{width:"100%" , color:(post.booking)?"#bae637":"red"  }}  >BOOKING</button>
               </div>
               </div>{post.booking}
             </div>
         )
       })
       }
       </div>
   )
 }
}