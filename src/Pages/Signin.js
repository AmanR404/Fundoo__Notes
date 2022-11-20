import React, { useState } from "react";
import "./Signin.css";
import TextField from "@mui/material/TextField";
import { SignInApi } from "./Services/Userservices";
import { useNavigate } from "react-router-dom";

function Signin() {
  const[signinObj, setsigninObj] = useState({
    email : "",
    password : ""
  })

  const email = signinObj.email
  const password = signinObj.password
// Regex
  const emailPattern = /^[A-Za-z0-9]+[/@]*[a-zA-Z]*[/.]*[a-zA-Z]*$/;
  const passPattern = /^[A-Za-z0-9/./@/_/-]{8,}/

  const navigate = useNavigate()

  const submit = (e)=>{
    e.preventDefault();
    if((email.match(emailPattern)) && (password.match(passPattern))){
      SignInApi(signinObj)  
      .then((resp) => {localStorage.setItem('token',resp.data.id); console.log(resp); if(resp.status == 200){
        navigate("/dashboard")
      }})
      .catch((error) =>{console.log(error)} )
    }
    else{
      console.log("Type Details correctly")
      borderHandler();
    }
  }

  const borderHandler = ()=>{
    if(!email){
      document.querySelector(".upperinput").style.border = "1.5px solid red";
      document.querySelector(".upperinput").style.borderRadius = "4px";
      setTimeout(() => {
        document.querySelector(".upperinput").style.border = "1px solid grey";
      }, 5000);
    }
    if(!password){
      document.querySelector(".lowerinput").style.border = "1.5px solid red";
      document.querySelector(".lowerinput").style.borderRadius = "4px";
      setTimeout(() => {
        document.querySelector(".lowerinput").style.border = "1px solid grey";
      }, 5000);
    }
   
  }

  const handleChangeEmail = (event) => {
    setsigninObj(prevState => ({
      ...prevState,
      email : event.target.value
      }))
  }

  let handleChangePassword = (event) => {
    setsigninObj(prevState => ({
      ...prevState,
      password : event.target.value
  }))
  }

  return (
    <div id="outerbox">
      <div className="mainbox">
        <img
          src="data:image/png;base64,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"
          alt="Image"
        />
        <span id="signintext">Sign in</span>
        <span id="signinbottomtext">Use your Google Account</span>
        <form>
          <TextField
            id="outlined-basic"
            className="form upperinput"
            value={email}
            label="Email or phone"
            variant="outlined"
            onChange={handleChangeEmail}
          />
          <TextField
            id="outlined-basic"
            className="form2 lowerinput"
            value={password}
            label="Password"
            variant="outlined"
            onChange={handleChangePassword}
          />
        
        <span id="forgot">Forgot_email?</span>
        <div id="forgotbottombox">
          <p>Not your Computer? Use Guest mode to sign in privately.</p>
          <p id="boxp">Learn more</p>
        </div>
        <div id="lastbox">
          <span>Create account</span>
          <button
            type="submit" onClick={submit}>Next
          </button>
        </div>
        </form>
      </div>
      <section id="section">
        <form>
          <select name="English (United States)" id="dropdown">
            <option value="English (United States">
              English (United States)
            </option>
            <option value="Hindi">Hindi</option>
          </select>
        </form>
        <div id="sectionbox">
          <span>Help</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </section>
    </div>
  );
  }
export default Signin;
