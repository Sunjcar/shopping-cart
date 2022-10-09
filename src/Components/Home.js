import React from 'react'
import Computer from '../Images/Computer.jpg'
import { Link } from 'react-router-dom'

function Home() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    }
    return (
        <div className='flex justify-center items-center flex-wrap
        p-8 gap-20
        h-90 bg-gradient-to-l from-violet-300'>
            <section className='flex flex-col gap-4'>
                <p className='font-bold tracking-widest uppercase text-gray-400'>
                    The best online store in the world!
                </p>
                <h1 className='uppercase'>
                    A few clicks is all it takes!
                </h1>
                <Link style={navStyle} to='/catalog'>
                    <button className='flex justify-center items-center
                 w-15 h-4 rounded-full
                 border-none outline-none
                 text-3xl
                 bg-black text-white 
                 cursor-pointer
                 hover: -translate-y-1 hover:scale-110 shadow-sm'>
                        Shop Now
                    </button>
                </Link>
            </section>
            <img className='flex w-80 h-20 rounded-2xl' src={Computer} alt='Computer Aesthetic' />
        </div>
    )
}

export default Home

