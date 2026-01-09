import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../Redux/Slices/AuthSlice";


const Signup = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handledchanged = (e)=>{
    setFormData({...formData,[e.target.name] : e.target.value})
    
  }
  const handlesubmit = (e)=>{
    e.preventDefault()
    const {username,email,password} = formData
    if(!username||!email||!password){
        alert("all fields are required")
        return;
    }
    setLoading(true);

    setTimeout(() => {
        dispatch(signup(formData ))
        setLoading(fasle) 
    }, 1200);

  }
  useEffect(()=>{
    if(isAuthenticated)
    {
     navigate("/home")
    }
  },[isAuthenticated,navigate])

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handlesubmit}>
        <input onChange={handledchanged}
          type="text"
          name="username"
          placeholder="username"
          value={formData.username}
        />
        <input onChange={handledchanged}
          type="text"
          name="email"
          placeholder="email"
          value={formData.email}
        />
        <input onChange={handledchanged}
          type="text"
          name="password"
          placeholder="password"
          value={formData.password}
        />
        {
            error && (
                <p>
                    {error}
                </p>
            )
            
        }
        <button type ='submit' disabled = {loading}>{loading?"crate an account":"Signup"}</button>
      </form>
      <p>
        Already Have an Account ? <Link to = "/">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
