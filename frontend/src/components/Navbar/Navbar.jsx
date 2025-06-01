import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({setshowLogin}) => {

  const [menu,setMenu]=useState("home");

  const {getTotalAmount,token,setToken}=useContext(StoreContext);

  const navigate = useNavigate();

  const logout =()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")

  }


  return (
    <div className='Navbar flex justify-between items-center ' id='Navbar'>
       <Link to='/'><img src={assets.logo} alt="" className='logo w-[150px]' id='logo' /></Link>

       <ul id='navbar-menu'  className="navbar-menu flex gap-7 listyle-none text-[18px] cursor-pointer text-[#49557e]">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""} >home</ Link >
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""} >menu</a > 
        <a href='#app-download' onClick={()=> setMenu("mobile-app")} className={menu==="mobile-app"?"active":""} >mobile-app</a>
        <a href='#footer' onClick={()=> setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</a>
       </ul>

       <div className=" navbar-right flex gap-5 items-center" id='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className="navbar_search_icon">
         <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setshowLogin(true)}   id='navbar_button' className=' navbar_button bg-transparent text-lg border-1 border-[#a82d49]   '>Sign in</button>
        :<div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li><img onClick={()=>navigate('/myorders')} src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}> <img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
         </div>}
        
       </div>
    </div>
  )
}

export default Navbar;