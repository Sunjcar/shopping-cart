import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const Cart = ({ cart, handleAddProduct, handleRemoveProduct }) => {

    const totalPrice = cart.reduce((price, item) => price + item.quantity * item.price, 0)

    return (
        <div className='pb-8 flex-1'>
            <div className='flex flex-col items-center justify-center
            p-4'>
                <h1 className='text-xl font-extrabold'>Cart</h1>

                {cart.length === 0 &&
                    <div className='cart-empty'> Cart is empty </div>
                }
            </div>
            <div>
                {cart.map((item) => (
                    <div className='flex justify-between items-center flex-wrap
                    gap-4'>
                        <div key={item.id} className='flex items-center justify-around
                        p-4 w-100%'>
                            <div className='flex gap-4 md:w-30 md:justify-between'>
                                <img
                                    className='flex w-5 h-5 rounded-xl'
                                    src={item.image}
                                    alt={item.name}
                                />
                                <p className='flex-wrap w-5 md:flex-nowrap md:w-15'>{item.name}</p>
                            </div>
                            <div className='flex gap-2 w-2'>
                                <button className='flex items-center justify-center' onClick={() => handleRemoveProduct(item)}>
                                    <AiOutlineMinus />
                                </button>
                                <p>{item.quantity}</p>
                                <button className='flex items-center justify-center' onClick={() => handleAddProduct(item)}>
                                    <AiOutlinePlus />
                                </button>
                            </div>
                            <p className='w-5'>${item.price * item.quantity}</p>

                        </div>
                    </div>
                ))}
            </div>
            <hr className='pb-2 bg-stone-50'></hr>
            <div className='flex flex-row-reverse relative
            gap-4 right-16 md:right-20 lg:right-152px'>
                <h3 className='total-price'>Total: ${totalPrice}</h3>
                <button className='flex justify-center items-center
                w-10 h-2.5 rounded-3xl
                 bg-black text-white
                 border-none outline-none
                 cursor-pointer'> Check Out </button>
            </div>
        </div>
    )
}

export default Cart
