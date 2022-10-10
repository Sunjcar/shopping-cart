import React from 'react'
import { Link } from 'react-router-dom'
import { BsCartFill } from "react-icons/bs"

function Nav({cart, ItemsInCart}) {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    return (
        <div className='flex justify-around items-center min-h-10
         bg-neutral-800 text-white'>
            <h1>Store</h1>
            <Link style={navStyle} to='/shopping-cart'>
                <div>
                    <li className='flex w-20 justify-around items-center 
                list-none cursor-pointer
                hover:-translate-y-1 hover:scale-110'>
                        Home
                    </li>
                </div>
            </Link>
            <Link style={navStyle} to='catalog'>
            <li className='flex w-20 justify-around items-center 
                list-none cursor-pointer
                hover:-translate-y-1 hover:scale-110'>
                        Shop
                    </li>
            </Link>
            <Link style={navStyle} to='cart'>
                <div className='flex w-20 justify-around items-center 
                relative list-none cursor-pointer gap-4
                hover:-translate-y-1 hover:scale-110'>
                    <li className='flex items-center justify-center 
                    font-bold p-4 rounded-3xl bg-white text-black
                    '><BsCartFill/>
                    </li>
                    {ItemsInCart > 0 && <div className='flex justify-center items-center
                    absolute left-0 bottom-0 
                    rounded-full w-1.2 h-1 
                    text-xs text-black font-bold bg-cyan-400'>{ItemsInCart}</div>
                    } 
                </div>
            </Link>
        </div>
    )
}

export default Nav

