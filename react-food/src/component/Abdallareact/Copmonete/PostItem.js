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
  componentDidMount() {
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


  render() {
    return (
      <div>

        {
          this.state.posts.map(post => {
            return (
              <div>
                <h3>Post </h3>
                <p>{post.namefood}</p>
                <p>{post.amount}</p>
                <p>{post.description}</p>
                <p>{post.location}</p>
                <p>{post.booking}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
