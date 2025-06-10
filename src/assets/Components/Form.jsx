import axios from 'axios'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Form = () => {
    const [uemail, setemail] = useState()
    const [pass, setpass] = useState()
    const navigate = useNavigate()

    function handleChangemail(e) {
        setemail(e.target.value)
    }

    function handleChangepass(e) {
        setpass(e.target.value)
    }

    const handleSubmit=(e)=> {
        e.preventDefault()
        const logindetails = axios.post("https://netflix-loginpage.onrender.com/login", { "email": uemail, "password": pass })
        logindetails.then((data) => {
            //console.log(data)
            if (data.data === true) {
                navigate('/Watchlist')
            }
            else {
                navigate('/Fail')
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} method='post'>
            <div className='content-center text-center flex  flex-col flex-wrap'>
                <input type="text" onChange={handleChangemail} placeholder='Email or mobile number' className='bg-transparent border border-gray-600 px-2 py-4'required /> <br />
                <input type="text" onChange={handleChangepass} placeholder='Password' className='bg-transparent border border-gray-600 px-2 py-4' required /> <br />
                <button type='submit' className=' bg-red-600 px-20 py-2 mb-3'>Sign In</button>
                <h3 className='text-gray-400 text-center'>OR</h3>
                <button className=' bg-gray-700 px-20 py-2 my-3'>Use a sign-in code</button>
                <p className='underline hover:text-gray-500'>Forgot Password?</p>
            </div>
            <div>
                <p className='my-7'>
                    <input type="checkbox" className='text-3xl' />
                    <span> Remember me</span>
                </p>
                <p className='text-gray-400 inline'>New to Netflix? </p>
                <p className='inline font-bold'>Sign up now</p>
                <p className='text-gray-500 text-xs mt-4'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                <p className='text-blue-500  underline text-xs mt-2  mb-16 hover:cursor-pointer'>Learn more</p>
            </div>
        </form>
    )
}

export default Form