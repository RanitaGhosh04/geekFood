import React from 'react'
import pizza from '../assets/delicious-looking-3d-burger-with-simple-background-removebg-preview.png'
import { motion } from 'framer-motion'


function HeroPage() {
  return (
    <div className='h-screen flex justify-around px-8 bg-zinc-950'>
        <div className='w-1/2  pt-14' >
            <h1 className=' text-8xl font-semibold text-white tracking-tight'>THE BEST</h1>
            <h1 className=' text-8xl font-semibold text-white tracking-tight'>PLACE TO EAT</h1>
            <h2 className=' text-8xl font-semibold text-white tracking-tight'>TASTE MATTERS</h2>

            <p className=' text-2xl font-light text-white tracking-tighter mt-10' style={{ fontFamily: "'Cedarville Cursive', cursive" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio, tenetur vero fugit, ullam earum quaerat aliquid, ex ratione recusandae voluptatum voluptatem autem blanditiis provident quisquam sint! Cupiditate, officia temporibus!
            </p>

            <div className='mt-16 flex gap-5'>
                <button className=' bg-red-600 text-black h-12 w-[150px]
                 rounded-sm'>ORDER ONLINE</button>
                <button className=' bg-yellow-500 text-white h-12 w-[150px] rounded-sm'>VIEW MENU</button>
            </div>


        </div>

        <div className='w-1/2  pl-14'>
        <img src={pizza} className='h-[90vh] w-[90vw]' alt=""/>

        </div>
    </div>
  )
}

export default HeroPage