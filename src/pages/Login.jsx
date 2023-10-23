import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import {useNavigate} from 'react-router-dom';
 
const Login = () => {
  const navigate=useNavigate();
  const {currentUser,signinWithGoogle}=UserAuth();
  console.log(currentUser);

  const handleLogin=async()=>{
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error)
    }
  }
useEffect(() => {
 if(currentUser){
  navigate('/chat')
 }
}, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Hello there 👋🏻</h1>
        <p className="py-6">join the conversation , meet new people , and make connections in one shared room.</p>
        <button onClick={handleLogin} className="btn btn-active btn-accent">Login With Google</button>
      </div>
    </div>
  </div>
  )
}

export default Login