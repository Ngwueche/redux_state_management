import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

function CartItemContainer() {
  const dispatch = useDispatch()
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  // console.log(amount)
  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2 className=''>Your Cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className='cart'>
      <header>
        <h2 className=''>Your Cart</h2>
      </header>
      <div>
        {cartItems.map((item)=>{
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn"
        onClick={()=> dispatch(openModal())}
        >Empty Cart</button>
      </footer>
    </section>
  );
}

export default CartItemContainer;
