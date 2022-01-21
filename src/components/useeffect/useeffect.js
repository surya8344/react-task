import React , {useRef, useEffect, useState }from 'react';

export default function Increment() {
    const [count , setcount]=useState(0)
    const useRefMount = useRef()
    useEffect(()=>{
        console.log('fires on mount and also update');
        document.title='count' + count
    })
    useEffect(()=>{
        if(useRefMount.current){
            console.log('fires when updated');
        }
        else{
            useRefMount.current=true;
        }
    })
    const Increment = ()=> {
        setcount(count+1)
    }
    useEffect(()=>{
        console.log('fires only on mounted');
    },[])
    useEffect(()=>{
        return()=>{
            console.log('fires only on unmounted');
        }
    })
    
  return (

    <div>
<h1>{count}</h1>
    <button onClick={Increment}>Increment</button>
  </div>
  )
}
