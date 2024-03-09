'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const page = () => {
  let router=useRouter();
  return (
    <div>
      <button className='w-[200px] bg-green-800 h-[50px] text-[20px] rounded'
      onClick={()=>router.push('/quiz')}>
        Start Quiz
      </button>
      
    </div>
  )
}

export default page