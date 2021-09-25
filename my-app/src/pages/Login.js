import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const handleEmailChange = (event) => {
      setEmail(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(Email===''){
      console.log("Please enter your Email")
      return
    }
    if(Password===''){
      console.log("Please enter your Password")
      return
    }
    console.log(Email,Password)
}
    return (
        <div>
             <form class="row g-3 w-50" onSubmit={handleSubmit}>
  <div class="col-md-12">
    <label for="Email" class="form-label">Email</label>
    <input type="email" class="form-control" id="Email" onChange={handleEmailChange}/>
    <p>{Email}</p>
  </div>
  <div class="col-md-12">
    <label for="Password" class="form-label">Password</label>
    <input type="password" class="form-control" id="Password" onChange={handlePasswordChange}/> 
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
       <Link to="/register">Create An Account</Link>
        </div>
    )
}

export default Login
