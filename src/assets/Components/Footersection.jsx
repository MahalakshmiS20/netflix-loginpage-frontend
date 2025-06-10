import React from 'react'

const Footersection = () => {
  return (
    <div className='bg-black text-gray-300 px-52 py-20 z-20 '>
        <h4 className='mb-5'>Questions? Call 000-800-919-1743 (Toll-Free)</h4>
        <div className='grid grid-cols-4 underline'>
          <p>FAQ</p>
          <p>Help Centre</p>
          <p>Terms of Use</p>
          <p className='mb-5'>Privacy</p>
          <p>Cookie Preferences</p>
          <p>Corporate Information</p>
        </div>
          <select name="" id="" className='bg-black text-white border border-white border-solid px-10 py-1 mt-5'>
            <option value="">English</option>
            <option value="">हिन्दी</option>
          </select>
      </div>
  )
}

export default Footersection