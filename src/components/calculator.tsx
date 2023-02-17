import { Component, useState } from 'react'
import Divide from '../assets/Divide.svg'

interface initialState {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],
  current: 0
}


export default function Calculator (props: initialState) {
  function clearMemory() {
    
  }

    return (
        
      <div className='bg-dark-blue rounded-3xl h-[32rem] w-80 box hover:shadow-2xl border border-black border-2 font-last-calc'>
        <div className="font-last-calc text-xl text-right mx-4 mt-4 text-slate-800 text">
          
        </div>
        <div className="flex flex-col">
          <span className="font-last-calc text-3xl mx-4 text-slate-700">=</span>
          <div className="self-end font-last-calc text-4xl mx-4 "> {current} </div>
        </div>
        <div className="grid grid-cols-4 col-span-5 gap-[12px] max-w-[320px] mt-[4rem] mx-5 ">
            
            <button className="rounded-full w-[60px] h-[60px] bg-yellow-700 shadow-button font-last-calc ">CE</button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue shadow-button font-last-calc ">C</button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue shadow-button font-last-calc">%</button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue-200 shadow-button flex flex-wrap justify-center content-center bottom-8 "><img src={Divide} /></button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue shadow-button font-last-calc">1</button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue shadow-button font-last-calc">2</button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue shadow-button font-last-calc">3</button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue-200 shadow-button font-last-calc">X</button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue shadow-button font-last-calc">4</button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue shadow-button font-last-calc">5</button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue shadow-button font-last-calc">6</button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue-200 shadow-button font-last-calc">-</button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue shadow-button font-last-calc">7</button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue shadow-button font-last-calc">8</button>
            <button className="rounded-full w-[60px] h-[60px] bg-dark-blue shadow-button font-last-calc">9</button>
            <button className="rounded-full w-[60px] h-[60px] bg-result-button shadow-button font-last-calc" id='calculateButton' onClick={calculate}>=</button>
            
            
        </div>
      </div>
       
    
    )
}