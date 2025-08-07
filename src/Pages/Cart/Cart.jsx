import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  // console.log("cartItems:", cartItems);
  // console.log("food_list:", food_list);
  

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list && food_list.map((item) => {
          if (cartItems && cartItems[item._id] > 0) {
            const quantity = cartItems[item._id];
            return (
             
              <div>
              <div className='cart-items-title cart-items-item' key={item._id}>
               <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>Rs.{item.price}</p>
                <p>{quantity}</p>
                <p>Rs.{item.price * quantity}</p>
                <p className='cross'
                   onClick={() => removeFromCart(item._id)}>x 
                </p>
              </div>
            <hr />
            </div>

      
            )
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs.{getTotalCartAmount()===0?'0':'120'}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b> 
              <b>Rs.{getTotalCartAmount()===0?'0':getTotalCartAmount() +120}</b>
            </div>
          </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code' />
              <button>Submit</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;
