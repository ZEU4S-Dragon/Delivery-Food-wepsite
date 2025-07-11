import React, { useState,useContext } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'


const LoginPopup = ({setshowLogin}) => {

    const {url,setToken} = useContext(StoreContext)

    const [currState,setcurrState]=useState("Login")
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value =  event.target.value
        setData(data=>({...data,[name]:value}))
    }

    const onLogin = async(event)=>{
        event.preventDefault();
        let newUrl =url;
        if(currState==="Login"){
            newUrl+="/api/user/Login"
        }
        else{
            newUrl+="/api/user/registar"
        }

        const response = await axios.post(newUrl,data)

        if (response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token);
            setshowLogin(false)
        }
        else{
            alert(response.data.message)
        }
    }

    

  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2 className='text-2xl '>{currState}</h2>
                <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name ' required /> }
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder=' Your password' required />
                </div>
                <button type='submit'>{currState==="Sign Up"?"create account":"Login"}</button>
                <div className="login-popup-conditaion">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState==="Login"
                ?<p>create anew acount? <span onClick={()=>setcurrState("Sign Up")}>Click here</span></p>
                : <p>already have an acount? <span onClick={()=>setcurrState("Login")}>Login here</span></p>
                }
                
               

        </form>
    </div>
  )
}

export default LoginPopup