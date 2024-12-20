import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {

    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/useorders",{},{headers:{token}});
        setData(response.data.data);
        console.log(response.data.data);
    }

    useEffect(()=>{
        if (token) {
            fetchOrders();
        }
    },[token])




  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className="container">
            {data.map((order,index)=>{
                return (
                    <div key={index} className='my-orders-order'>
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items.map(()=>{
                            if (index === order.items.length-1) {
                                return item.name+" x "+item.quantity
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span><br>{order.status}</br></p>
                        <button onClick={fetchOrders}>Track Order</button>
                    </div>
                )

            })}
        </div>
    </div>
  )
}

export default MyOrders
