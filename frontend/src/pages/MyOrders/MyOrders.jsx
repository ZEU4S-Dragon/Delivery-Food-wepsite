import React from 'react'
import './MyOrders.css'
import { useState } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const MyOrders = () => {

    const {url,token} =useContext(StoreContext);
    const [data,setData]=useState([]);

    const fetchOrders = async ()=>{
        const response = await axios.post(url+"/api/orders/userorders",{},{headers:{token}});
        
    }


  return (
    <div>



    </div>
  )
}

export default MyOrders