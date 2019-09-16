
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      email: "",
      password: "",
      linkLogin: "/Input",
      formErrors: {
        email: "",
        password: "",
        exist:""
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email:this.state.email,
      password:this.state.password
    }

    if (formValid(this.state)) {
      // console.log(`
      // --SUBMITTING--
      // Email: ${this.state.email}
      // Password: ${(this.state.password)}
      // `);
    } else {
      // console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
//console.log("REACT", user)
    axios
    .post(`http://localhost:9000/user/signIn`, user)
    .then(response => {
          // console.log("React:get response.data", response.data.length >= 1 ? window.location = this.state.linkLogin : false);
          if(response.data.length === 0)
          {
            let formError ={...this.state.formErrors} 
            formError.exist="this user is not exist"
            this.setState({formErrors: formError})

          }

            // window.location = this.state.linkLogin;
            this.props.history.push({
              pathname: '/input',
              state: response.data // you recieve as this.props.location.state
            })



    })
    .catch(error => {
     // console.log("Error", error);
    });
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

  //  console.log("Name: ", name)
    //console.log("Value: ", value)
    

    switch (name) {
        case "email":
        formErrors.email =
          emailRegex.test(value) 
            ? ""
            : "invalid email address";
        break;
        case "password":
        formErrors.password =
          value.length < 6 
            ? "minimum 6 charachters required"
            : "";
        break;
        default:
          break;
          
    }

    this.setState({formErrors, [name]: value }, () => console.log(this.state))
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Food Donation</h1>
          <h3>Sign In</h3>
          <form onSubmit={this.handleSubmit} noValidate>
            
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Sign In</button>
          <span className="errorMessage">{formErrors.exist}</span>
          
              <Link to="/" className="FormField__Link">
              Create an account
            </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;