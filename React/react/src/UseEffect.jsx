import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0)
    const [count2,setCount2] = useState(0)
    //First type of useEffect
    // useEffect(()=>{
    //     console.log("UseEffect is called")
    // },[])

    //Second type of useEffect
    // useEffect(()=>{
    //     console.log("UseEffect is called")
    // },[count,count2])

    //Third type of useEffect 
    useEffect(()=>{
        console.log("UseEffect is called")
    })


  return (
         <div>
             <h1>{count}</h1>
             <button onClick={() => {setCount(count + 1)}}>Increase</button>
             <h1>{count2}</h1>
            <buttom onCLick = {() => {setCount2(setCount2(count2 - 1))}}>Decrease</buttom>
         </div>  
  )
}

export default UseEffect
