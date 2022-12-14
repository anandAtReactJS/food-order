import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sign_img from "./Sign_img";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();

  const[inpval, setInpval] = useState({
    
    email: "",
   
    password: ""

  })
  const[data,setData] = useState([])
  console.log(data)

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

    const getuserArr = localStorage.getItem("useryoutube");
    console.log("getuserArr")
     
    const {email,password} = inpval;

     if(email === ""){
      alert("email field is required")
    }else if (!email.includes("@")){
      alert("please enter valid email address")
    }else if(password === ""){
      alert("password field is required")
    }else if(password.length < 5){
      alert("password length greater than 5" )
    }else{
       if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr);
        const userLogin = userdata.filter((el,k)=> {
          return el.email === email && el.password === password
        })
        // console.log(userLogin)
        if(userLogin.length === 0){
          alert("invalid details")
        }else{
          console.log("user login successfully")
          history("/homepage")
        }
       }
    }

  }
  return (
    <>
    <div className="container mt-3">
        <section  className="d-flex justify-content-between ">
          <div className="left_data mt-3 p-3" style={{width:"100%"}}>
            <h3 className="text-center col-lg-6">Login</h3>
            <Form>
              

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="email" onChange={getdata} name='email' placeholder="Enter E-mail" />
              </Form.Group>
              
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
              </Form.Group>

              <Button variant="primary" onClick={addData} className="col-lg-6" type="submit" style={{background: "rgb(67,185,127)"}}>
                Submit
              </Button>
            </Form>
            
          </div>

          <Sign_img />
        </section>
      </div>
    </>
    
  )
}
export default Login
