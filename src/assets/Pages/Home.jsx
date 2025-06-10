import React from 'react'
import Form from '../Components/Form'
import Footersection from '../Components/Footersection'

const Home = () => {
  return (
    <div className='w-full h-full relative'>
      <img className='w-full h-full object-cover z-0' src="https://i.pinimg.com/originals/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg" alt="Netflix-banner" />
      <div className='absolute top-0 left-0 right-0 h-[857px] bg-black opacity-50 z-10'></div>
      <img src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png" alt="Netflix Logo" 
      className='absolute w-36 top-2 left-40 z-20 sm:left-20' />
      <div className='bg-black text-white absolute px-16 py-10 top-20 left-1/2 transform -translate-x-1/2 z-20'>
        <h2 className='text-3xl font-bold my-4 px-10'>Sign In</h2>
        <Form />
      </div >
        <Footersection />
    </div>
  )
}

export default Home