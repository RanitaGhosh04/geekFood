import React from 'react'
import grill from '../assets/flames.png'

function NavBar() {
  return (
    <>
    <div className='flex justify-around bg-black border-b-2 border-black'>

    <div className='w-[120px] text-center'>
    <h1 className='text-3xl text-white'>
        <img src={grill} alt="" className='h-10 w-10 ml-11 mt-2'/>
        THANAL</h1>
    <p className=' text-xs font-extralight pb-2 text-white'>INDIAN TAVERN</p>
    </div>
 
    <div className='flex gap-10 pt-11 text-white'>
    <h2 className='text-xl'>Home</h2>
    <h2 className='text-xl'>Quote</h2>
    <h2 className='text-xl'>Restaurants</h2>
    <h2 className='text-xl'>Foods</h2>
    <h2 className='text-xl'>Contact</h2>
    </div>


<button className='bg-yellow-500 h-11 rounded-sm w-[150px] mt-9 font-bold'>BOOK A TABLE</button>
</div>
    </>
  )
}

export default NavBar