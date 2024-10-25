import React, {useState } from 'react'
import axios from 'axios';  


export default function SignUp(){

  const [data, setData] = useState({ firstname: '', lastname: '', email: '', password: '' });  

  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setData({ ...data, [name]: value });  
  };  

  

  const handleSubmit = async (e) => {  
    e.preventDefault();  
    try {  
      const response = await axios.post('https://dev-cloud.hausaccommodations.com/', data);  
      console.log(response.data);  
    } catch (error) {  
      console.error("There was an error submitting the form!", error);  
    }  
  };  



    return (
      <form className='form-group' onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-2">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            name='firstname'
            value={data.firstname}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label>Last name</label>
          <input 
          type="text" 
          className="form-control" 
          placeholder="Last name"
          name='lastname'
          value={data.lastname} 
          onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name='email'
            value={data.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name = 'password'
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
            onClick = {handleSubmit}
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
}