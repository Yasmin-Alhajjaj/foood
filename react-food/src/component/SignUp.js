import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   // validate form errors being empty
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val === null && (valid = false);
//   });

//   return valid;
// };

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",

      }
    };
  }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   if (formValid(this.state)) {
  //     console.log(`
  //     --SUBMITTING--
  //     First Name: ${this.state.firstName}
  //     Last Name: ${this.state.lastName}
  //     Phone Number: ${this.state.phoneNumber}
  //     Email: ${this.state.email}
  //     Password: ${(this.state.password)}
  //     `);
  //   } else {
  //     console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
  //   }
  // };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    console.log("Name: ", name)
    console.log("Value: ", value)
    

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 
            ? "minimum 3 charachters required"
            : "";
        break;
        case "lastName":
        formErrors.lastName =
          value.length < 3
            ? "minimum 3 charachters required"
            : "";    
        break;
        case "phone":
          formErrors.phone = 
          value.length < 10
          ? "minimun 10 numbers required"
          : "";
          break;
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
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
           <div className="phone">
             <label htmlFor="phone">Phone Number</label>
             <input
               className={formErrors.phone.length > 0 ? "error" : null}
               placeholder="Phone Number"
               type="text"
               name="phone"
               noValidate
               onChange={this.handleChange}
             />
             {formErrors.phone.length > 10 && (
               <span className="errorMessage">{formErrors.phone}</span>
             )}
           </div>

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
              <button type="submit" onClick={this.props.newuser.bind(this,this.state.firstName,this.state.lastName,this.state.phone,this.state.email,this.state.password)} >Create Account</button>
              <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
