import React from 'react'
import { Link } from 'react-router-dom'
import { BsCartFill } from "react-icons/bs"

function Nav({cart}) {
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
                list-none cursor-pointer
                hover:-translate-y-1 hover:scale-110'>
                    <li className='Cart-Icon'><BsCartFill/></li>
                    <div>{cart.length}</div>
                </div>
            </Link>
        </div>
    )
}

export default Nav

