import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";

const Signup = () => {

  const[inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: ""

  })
  const[data,setData] = useState([])
  console.log(inpval)

  const getdata = (e) => {
      // console.log(e.target.value)

      const{value,name} = e.target;
        // console.log(value,name)

        setInpval (() => {
          return{
            ...inpval,
            [name] : value
          }
        })
    

  }
  const addData =(e) => {
    e.preventDefault();
    // console.log(inpval)
     
    const {name,email,date,password} = inpval;

    if(name === "") {
      alert("name field is required")
    }else if(email === ""){
      alert("email field is required")
    }else if (!email.includes("@")){
      alert("please enter valid email address")
    }else if(date === ""){
      alert("date field is required")
    }else if(password === ""){
      alert("password field is required")
    }else if(password.length < 5){
      alert("password length greater than 5" )
    }else{
      console.log("data added successfully")

      localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
    }

  }


  return (
    <>
      <div className="container mt-3">
        <section  className="d-flex justify-content-between ">
          <div className="left_data mt-3 p-3" style={{width:"100%"}}>
            <h3 className="text-center col-lg-6">Sign-Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="text" onChange={getdata}  name='name' placeholder="Enter Your Name" />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="email" onChange={getdata} name='email' placeholder="Enter E-mail" />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="date"  name='date' onChange={getdata}  />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
              </Form.Group>

              <Button variant="primary" onClick={addData} className="col-lg-6" type="submit" style={{background: "rgb(67,185,127)"}}>
                Submit
              </Button>
            </Form>
            <p className="mt-3">Already Have An Account <span><NavLink to="/login"> Login </NavLink></span></p>
          </div>

          <Sign_img />
        </section>
      </div>
    </>
  );
};

export default Signup;
