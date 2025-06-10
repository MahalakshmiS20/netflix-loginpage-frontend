import React from 'react'

const Fail = () => {
  return (
    <div className='bg-black py-72 text-center'>
        <h1 className='text-red-600 text-4xl font-bold mb-3'>Login Failed</h1>
        <h4 className='text-white mb-3'>Oops! Incorrect email or password</h4>
        <button className='bg-red-600 text-white px-5 py-1'>Try Again</button>
    </div>
  )
}

export default Fail