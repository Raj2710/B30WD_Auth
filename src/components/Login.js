import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login() {
    let navigate = useNavigate();
    let [email,setEmail] = useState("");
    let [password,setPassword] = useState("");
    let role = 2;
    let [passwordMatch,setMatch]=useState("");

    let handleSubmit = async()=>{
        let res = await axios.post("http://localhost:4000/users/login",{
            email,
            password,
            role
        })
        console.log(res)
        if(res.data.statusCode===200)
        {
            sessionStorage.setItem('token',res.data.token)
            sessionStorage.setItem('firstName',res.data.firstName)
            navigate("/dashboard")
        }
    }

  return (
    <div className='wrapper'>
        <h2 style={{"textAlign":"center","paddingTop":"5px"}}>Login to Have Access</h2>
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </Form.Group>
            
            <div style={{"textAlign":"center"}}>
                <Button variant="primary" onClick={()=>handleSubmit()}>
                    SignUp
                </Button>
            </div>
        </Form>
    </div>
  )
}

export default Login