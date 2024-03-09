'use client'
import React, { useState } from 'react'
import Question from '../_components/Question'
import Questions from '../allques'
const page = () => {
    let [qno, setQno] = useState(0);
    const increase=()=>{
        if(qno===3){
            setQno(0)
        }
        else{
            setQno(qno+1)
        }
    }
    const decrease=()=>{
        if(qno===0){
            setQno(3)
        }
        else{
            setQno(qno-1)
        }
    }
    return (
        <div className='w-full min-h-[300px] flex justify-around flex-col items-center'>
            <Question sr={Questions[qno].sr+1} statement={Questions[qno].statement} options={Questions[qno].options} rightoption={Questions[qno].rightoption} />
            <div id="button" className='w-[80%] flex justify-around items-center'>
                <button className='bg-blue-950 p-2 text-[20px]' onClick={decrease}>Previos Question</button>
                <button className='bg-blue-950 p-2 text-[20px]' onClick={increase}>Next Question</button>
            </div>
        </div>
    )
}

export default page