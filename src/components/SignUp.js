import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function SignUp() {

    let navigate = useNavigate();
    let [firstName,setFirstName] = useState("");
    let [lastName,setLastName] = useState("");
    let [email,setEmail] = useState("");
    let [mobile,setMobile] = useState("");
    let [password,setPassword] = useState("");
    let [confirmPassword,setConfirmPassword]=useState("");
    let role = 2;
    let [passwordMatch,setMatch]=useState("");


    useEffect(()=>{
        if(password===confirmPassword)
            setMatch(false)
        else
            setMatch(true)
    })

    let handleSubmit = async()=>{
        let res = await axios.post("http://localhost:4000/users/signup",{
            firstName,
            lastName,
            email,
            mobile,
            password,
            role
        })
        console.log(res)
        if(res.data.statusCode===200)
        {
            navigate("/login")
        }
    }

  return (
    <div className='wrapper'>
        <h2 style={{"textAlign":"center","paddingTop":"5px"}}>SignUp It's free</h2>
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" onChange={(e)=>{setFirstName(e.target.value)}} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" onChange={(e)=>{setLastName(e.target.value)}}/>
            </Form.Group>


            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Enter Mobile Number" onChange={(e)=>{setMobile(e.target.value)}}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" onChange={(e)=>{
                    setConfirmPassword(e.target.value)
                    }}/>
            </Form.Group>
            
            <div style={{"textAlign":"center"}}>
                <Button variant="primary" onClick={()=>handleSubmit()}>
                    SignUp
                </Button>
                {
                    passwordMatch?<div style={{"color":"red"}}>Password Should Match!</div>:<></>
                }
            </div>
        </Form>
    </div>
  )
}

export default SignUp