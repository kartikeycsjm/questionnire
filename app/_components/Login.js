'use client'
import React from 'react'
const Login = () => {
  return (
    <div className='w-[350px] border text-black border-blue-700 rounded-lg h-[300px] flex justify-around items-center flex-col'>
        <input className='h-10 w-[250px] p-3 rounded' type="text" placeholder='email'/>
        <input className='h-10 w-[250px] p-3 rounded' type="text" placeholder='password' />
        <button className='h-10 w-[250px] rounded  bg-blue-700'>Login</button>
    </div>
  )
}

export default Login