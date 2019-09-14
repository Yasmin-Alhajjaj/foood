import React, { Component } from 'react'
import axios from 'axios'

export default class PostItem extends Component {
 state = {
   posts: []
 };
 // getPost = () => {
 //   axios
 //     .get("http://localhost:9000/post/all")
 //     .then(res => {
 //         this.setState({ Post: res.data });
 //         console.log('Post', this.state.Post)
 //     })
 //     .catch(err => {
 //       console.log(err);
 //     });
 // };
 componentDidMount=()=> {
   axios
     .get("http://localhost:9000/post/all")
     .then(res => {
       this.setState({ posts: res.data });
       console.log('Post', this.state.posts)
     })
     .catch(err => {
       console.log(err);
     });
 }

update=(bookedup)=>{

  axios.put(`http://localhost:9000/post/${bookedup}`)
  //console.log('bookedup', bookedup)
  .then(res => {
    this.setState({ posts: res.data });
    console.log('Post', this.state.posts)
  })
  .catch(err => {
    console.log(err);
  });


}




 render() {
   
   return (
     <div className="row postitem" style={{display:"flex"}} >
       {this.state.posts.map((post,key) => {
          // let $image = null;
          // if (post.imageUrl) {
          //   $image = (<div style={{border: '2px solid blue'}}><img alt="" style={{ width: '100px', height: '100px'}} src={post.imageUrl} /></div>);
          // } else {
          //   $image = (<p>Please upload your meal photo</p>);
          // }
         return (
           <div key={key} className="col-4" style={{ marginTop:"30px" ,display:"flex" , justifyContent:"space-around"}} >
           <div className="card" style={{ width: "25rem",border: 'solid 1px black' }}>
             <img src={post.imageUrl}  className="card-img-top" alt=""/>
             {/* {$image} */}
             <div className="card-body" style={{textAlign:"right" }}  >
               <h5 className="card-title">{post.namefood}</h5>
               <p className="card-text"><span style={{color:"gray",fontSize:"13px" }} > {post.description}</span>  </p>
               </div>
               <ul className="list-group list-group-flush">
               <li className="list-group-item"><span style={{color:"gray"}} >amount:  </span> {post.amount}</li>
               <li className="list-group-item"> <span style={{color:"gray"}} >location: </span> {post.location}</li>
               </ul>
               <div className="card-body" >
               {/* <button  className="card-link">{post.booking}</button> */}
              <button className="btn btn-dark" onClick={this.update.bind(this,post._id)}  style={{width:"100%" , color:(post.booking)?"#bae637":"red"  }}  >BOOKING</button>
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