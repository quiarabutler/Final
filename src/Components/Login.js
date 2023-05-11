import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const Login = () => {
    return (
        <div className=" card container ">
        <br /><br />
        <h1 className="text-center"> Login </h1> 
        <form className>
          <div className="container form-outline mb-4  "> 
            <br />
           
            <input type="email" placeholder="Enter email address" id="email" className="form-control" />
            <label className="form-label" htmlFor="email"></label>
          </div> 
          <div className="container form-outline mb-4">
            <input type="password" placeholder="Enter password" id="password" className="form-control" />
            <label className="form-label" htmlFor="password"></label>
          </div>
         

          
          <div className="container text-center">
            <button type="button" className="btn btn-info btn-block mb-4">Sign in</button>
          </div>  

          <div className=" container col-4 text-center">
            <a href="#!">Forgot password?</a>
          </div>
          <br />
          <div className="text-center">
            <p> Not a member? <a href="#!">Register</a></p>
          </div>
        </form></div>
    );
  };

  export default Login;