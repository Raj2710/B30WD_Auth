import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
function Dashboard() {
    let navigate = useNavigate();
    let name = sessionStorage.getItem('firstName')
    useEffect(()=>{
        checkAuth();
    })

    let logout = ()=>{
        sessionStorage.clear();
        navigate('/login')
    }

    let checkAuth = async()=>{

        let token = sessionStorage.getItem('token')
        if(token)
        {
            let config = {
                headers: {
                  token: token,
                }
              }
              
            let res = await axios.post("http://localhost:4000/users/auth",{purpose:"Validate Access"},config)
            if(res.data.statusCode!==200)
            {
                sessionStorage.clear();
                navigate('/login');
            }
        }
        else
        {
            navigate('/login');
        }
    }
  return <div>
    <h1 style={{"textAlign":"center"}}>{name} You are Authenticated</h1>

    <button onClick={()=>checkAuth()}>Test Auth</button>
    <button onClick={()=>logout()}>Logout</button>
    </div>
}

export default Dashboard