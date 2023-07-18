import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";


const NavBar = () => {
const {amount} = useSelector((store)=>store.cart);
// const {items} =  useSelector((store)=>store.watchList)
  return (
    <nav>
      <div className='nav-center'>
        <h3> Redux Toolkit Tutorial</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
          <div className=''>
            {/* <p className=''>{items}</p> */}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
