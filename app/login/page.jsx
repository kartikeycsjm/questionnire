'use client'
import React, { useState } from 'react'
import Login from '@/app/_components/Login'
import Singup from '@/app/_components/Signip'
const page = () => {
  const [login,setlogin]=useState(true)
  return (
    <div className='w-full h-screen bg-black text-white flex justify-center items-center flex-col'>
      {login?<Login/>:<Singup/>}
      <button onClick={()=>setlogin(!login)}>{login?`Don't have account? signup`:`Already have account? Login`}</button>
    </div>
  )
}
export default page