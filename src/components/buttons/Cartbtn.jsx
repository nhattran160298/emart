import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Cartbtn = () => {

const state = useSelector((state)=>state.addItem)

  return (
    <div>
        <NavLink to="/cart"className="btn btn-outline-primary">
            <span className='fa fa-shopping-cart me-2'></span>Cart({state.length})
        </NavLink>
    </div>
  )
}

export default Cartbtn