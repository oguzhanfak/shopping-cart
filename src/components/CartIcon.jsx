import React from 'react'
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const CartIcon = ({cart}) => {
  return (
    <div>
        <div className='relative'>
        <MdOutlineShoppingCartCheckout className='text-2xl'/>
        {cart.length > 0 && <span className='bg-red-500 text-white flex w-4 h-4  justify-center items-start rounded-full absolute -top-2 -right-3 text-xs'>{cart.length}</span>}
        </div>
    </div>
  )
}

export default CartIcon