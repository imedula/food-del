import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'


// const FoodItem = ({id,name,price,description,image}) => {

//     const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)

//   return (
//     <div className='food-item'>
//         <div className="food-item-img-container">
//             <img className='food-item-image' src={image} alt="" />
//             {!cartItems[id]
//                 ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
//                 :<div className="food-item-counter">
//                     <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
//                     <p>{cartItems[id]}</p>
//                     <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
//                 </div>
//             }
//         </div>
//         <div className="food-item-info">
//             <div className="food-item-name-rating">
//                 <p>{name}</p>
//                 <img src={assets.rating_starts} alt="" />
//             </div>
//             <p className="food-tem-description">{description}</p>
//             <p className="food-item-price">${price}</p>
             
//         </div>
      
//     </div>
//   )
// }
const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart,url } = useContext(StoreContext);

  const itemName = typeof name === 'string' ? name : 'Unknown Item';
  const itemDescription = typeof description === 'string' ? description : '';
  const itemPrice = typeof price === 'number' ? price.toFixed(2) : '0.00';

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        {/* Display the food image */}
        <img className="food-item-image" src={url+"/images/"+image} alt={itemName} />
        
        {/* Conditional rendering based on cartItems[id] */}
        {!cartItems[id] ? (
          // If the item is not in the cart, show the add icon
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          // If the item is in the cart, show the counter with add and remove icons
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove from cart"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add more to cart"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          {/* Display item name */}
          <p>{itemName}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>

        {/* Display item description */}
        <p className="food-item-description">{itemDescription}</p>

        {/* Display item price */}
        <p className="food-item-price">${itemPrice}</p>
      </div>
    </div>
  );
};


export default FoodItem
