import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const Cart = ({ cart, handleAddProduct, handleRemoveProduct }) => {

    const totalPrice = cart.reduce((price, item) => price + item.quantity * item.price, 0)

    return (
        <div className='h-85.5'>
            <div className='flex flex-col items-center justify-center
            p-4'>
                <h1 className='text-xl font-extrabold'>Cart</h1>

                {cart.length === 0 &&
                    <div className='cart-empty'> Cart is empty </div>
                }
            </div>
            <div>
                {cart.map((item) => (
                    <div className='flex gap-4 justify-between items-center'>
                        <div key={item.id} className='cart'>
                            <div className='flex items-center justify-between w-30'>
                                <img
                                    className='flex w-5 h-5 rounded-xl'
                                    src={item.image}
                                    alt={item.name}
                                />
                                <p>{item.name}</p>
                            </div>
                            <div className='flex gap-4 w-6'>
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
                <div className='flex flex-row-reverse pr-40 gap-4'>
                <h3 className='total-price'>Total: ${totalPrice}</h3>
                <button className='flex justify-center items-center
                w-10 h-1.5 rounded-3xl
                 bg-black text-white
                 border-none outline-none
                 cursor-pointer'> Check Out </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
