'use client'
import React, { useRef, useState } from 'react'
import Question from '../_components/Question'
import Questions from '../data'
const page = () => {
    const hello = useRef(0);
    let [qno, setQno] = useState(0);
    let [answer, setAnswer] = useState(Array(Questions.length).fill(0));
    
    const [result,setResult]=useState(null);
    const increase = () => {
        if (qno === 3) {
            setQno(0)
        }
        else {
            setQno(qno + 1)
        }
    }
    const decrease = () => {
        if (qno === 0) {
            setQno(3)
        }
        else {
            setQno(qno - 1)
        }
    }
    const saveAnswer = (index) => {
        answer[qno] = (index + 1);
        console.log(answer);
    }
    const submit = () => {
        for(let i=0;i<Questions.length;i++){
            if(Questions[i].rightoption===answer[i]){
                setResult(result+1)
            }
        }
    }
    return (
        <div className='text-white w-full min-h-[400px] flex justify-around flex-col items-center'>
            <div className='bg-[#020202ab] my-3  w-[80%] min-h-[200px]'>
                <p className='m-3 text-white'>{qno + 1}/{Questions.length}. {Questions[qno].statement}</p>
                <div id="options" className='text-white'>
                    {Questions[qno].options.map((option, index) => (
                        <div ref={hello} key={index} className='m-2 p-2 w-[250px] h-[40px] bg-slate-400 rounded-lg flex items-center hover:bg-slate-700' onClick={() => saveAnswer(index, (qno + 1))}>{option}</div>
                    ))}
                </div>
            </div>
            <div id="button" className='text-white w-[80%] flex justify-around items-center'>
                <button className='bg-blue-950 p-2 text-[20px]' onClick={decrease}>Previos Question</button>
                <button className='bg-blue-950 p-2 text-[20px]' onClick={increase}>Next Question</button>
            </div>
            <button onClick={submit}
                className='text-white bg-blue-950 p-2 text-[20px]'>
                Submit and get Result
            </button>
            {result&&<p>You have answered {result}/{Questions.length}</p>}
        </div>
    )
}
export default page