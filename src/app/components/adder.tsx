'use client'
import { useRef, useState } from 'react';
import styles from './adder.module.css'

export default function Adder() {

  const inputNumbersRef = useRef<HTMLTextAreaElement>(null);
  const delimiterRef = useRef<HTMLInputElement>(null);
  const [sum, setSum]=useState<number>(0);

  function add(inputDelimiter: string, inputNumbers: string):  number{
    let res: number = 0;
    const lines: string[]|undefined = inputNumbers?.split('\n');
    if(lines){
      for(const i in lines){
        const nums= lines[i]?.split(inputDelimiter)
        for(const j in nums) {
          res+=Number(nums[j])
        }
      }
    }
    return res;
  }

    return (
      <div className={styles.textMessage}>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome to <br/></span> String Adder.</h1>
        <p className="mb-10 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">A tool that adds up numbers separated by any delimiter.</p>
        <h4 className="mb-6 justify-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 justify-self-center dark:text-white-400">
          <p className='font-bold text-white lg:text-xl'>How to use? </p>
          <ol className='list-decimal' >
            <li>Provide the delimiter/separator in the first input.</li>
            <li>In the second box, input the numbers separated by the delimiter.</li>
          </ol>
        </h4>
        <div>
          <input data-testid='delimiter' type='text' className= 'appearance-none w-4/5 self-center bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-10' placeholder="Enter the Delimiter" ref={delimiterRef}/>
          <textarea data-testid='numbersString' className='appearance-none w-4/5 self-center bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-10' placeholder="Enter the numbers separated by delimiter" ref={inputNumbersRef}/>
        </div>
        <button data-testid='submitButton' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-10' type='submit' onClick={()=>{if(delimiterRef?.current?.value && inputNumbersRef?.current?.value) setSum(add(delimiterRef?.current?.value, inputNumbersRef?.current?.value))}}>Submit</button>
        <div data-testid='result' className='font-bold text-white lg:text-xl'>
          Sum is: {sum}
        </div>
      </div>
    );
  }