import React from 'react'

const Watchlist = () => {
    return (
        <div className='bg-black text-center py-20'>
            <h1 className='text-red-600 text-3xl font-bold mb-2'>Welcome to Netflix</h1>
            <h4 className='text-white mb-5 '>You are Sucessfully logged in</h4>

            <div className="flex justify-center">
                <img
                    className='w-full max-w-5xl h-96 object-contain mb-5'
                    src="https://www.geo.tv/assets/uploads/updates/2023-01-03/l_462603_121045_updates.jpg"
                    alt="Netflix-movies"
                />
            </div>
            <button className='bg-red-600 text-white px-5 py-2'>Start Watching</button>
        </div>
    )
}

export default Watchlist 