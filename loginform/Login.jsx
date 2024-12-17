import React, { useState } from "react"
import {Link, Route, Routes, useNavigate} from "react-router-dom"
import Users from "../pages/users"
import axios from "axios"


const Login = () => {

//     const history = useNavigate();
// const [email,setEmail] = useState('')
// const [password, setPassword] = useState('')
// async function submit(event) {
//    event.preventDefault();
//    try {
//     await axios.post("http://localhost:3000/ecommerce/user",{
//         email,password
//     })
//     .then(res=>{
//         if(res.data){
//             history('/users',{state:{id:email}})
//         }
//     })
//    } catch (event) {
//     console.log(event)
//    }
// }

  return (
    <div className="container d-flex  justify-content-center ">
       
        <form className="w-50 m-5 p-5" >
        <h1 className="h1 p-5 text-center">login Form</h1>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3"  name="email" onChange={(event)=>{setEmail(event.target.value)}}/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3"  name="password" onChange={(event)=>{setPassword(event.target.value)}}/>
    </div>
  </div>
  <div className="row w-100">
    <div className="text-center ps-5">
        <Link to={'/admin/collection'}>
        <button type="submit" className="btn btn-primary text-center w-50" >Sign in</button>
        </Link>
  
    </div>
  
  </div>
  
  
</form>

    </div>
  )
}

export default Login