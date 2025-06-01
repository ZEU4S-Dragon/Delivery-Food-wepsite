import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

   
    const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={url+"/images/"+image} alt="" />
            {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
                :<div className='food-item-counter'> 
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info ">
            <div id='food-item-name-rating' className="flex justify-between items-center ">
                <p className='text-[20px] font-[500]'>{name}</p>
                <img className='w-[70px]' src={assets.rating_starts} alt="" />
            </div>
            <p id='food-item-desc' className="text-[#676767] text-[12px]">{description}</p>
            <p id='food-item-price' className="text-[#a82d49] text-[22px] font-[500] ">${price}</p>
        </div>

    </div>
  )
}

export default FoodItem