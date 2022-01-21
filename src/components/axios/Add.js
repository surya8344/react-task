
import axios from 'axios';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import { API_DATA } from './axiosData';

function Add(props) {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    

    function onCreatePost(e) {
      e.preventDefault();
       const postData = {
         title,
         description,
       };
       axios.post(API_DATA,
         postData,
       )
       .then((response) => {
         console.log(response);
       })
    }
  return (
     <div>
          <form onSubmit={onCreatePost}>
           <label> Title:
           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
           </label><br/><br/>
           <label>Description:
           <textarea value={description}  onChange={(e) => setDescription(e.target.value)}/>
          </label>
          <button type="submit" >createpost</button>
         
        </form>
        
     </div>
  )
}

export default Add;
