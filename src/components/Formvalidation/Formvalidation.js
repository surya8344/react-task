import React, { useState } from 'react';

export default function Formvalidation() {
    const [name,setName]=useState('')
    const [address,setAddress]=useState('')

    const showValue=(e)=>{
        e.preventDefault()
        console.log(name);
        console.log(address);
    }

  return <div>
      <form onSubmit={showValue}>
          <input 
             type='text'
             value={name}
             onChange={(e)=>setName(e.target.value)}
             placeholder='Name'
          />
          <input 
             type='text'
             value={address}
             onChange={(e)=>setAddress(e.target.value)}
             placeholder='Place'
          />
          <button type='submit'>Submit</button>
      </form>
  </div>;
}