// import axios from "axios";
// import React, { useState,useEffect } from "react";

// function Functionsinglepost(props) {
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     if (post && post.id === props.id) {
//       return;
//     }
//     getPostDetails();
//   }, []);
  
//   function getPostDetails() {
//     axios
//       .get(`https://surya-8b46f-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json`)
//       .then((response) => {
//         setPost({ ...response.data, id: props.id });
//       });
//   }
//   console.log(post);

//   if (post) {
//     return (
//       <div>
//         <div>Id:{post.id}</div>
//         <div>Tittle:{post.id1.name}</div>
//         <div>descripition:{post.id1.descripition}</div>
//       </div>
//     );
//   }
//   return null;
// }

// export default Functionsinglepost;



import axios from "axios";
import React, { useState ,useEffect} from "react";
import { API_DATA } from "./axiosData";

function Functionsinglepost(props) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (post && post.id === props.id) {
      return;
    }
  }, []);

  function getPostDetails() {
    axios
      .get(API_DATA)
      .then((response) => {
        setPost({ ...response.data, id: props.id });
      });
      console.log('post',post);
  }

  if (post) {
    return (
      <div>
            <div>Id:{post.id}</div>
            <div>Tittle:{post.id1.title}</div>
            <div>Description:{post.id1.description}</div>
            <button onClick={getPostDetails}>getPostDetails</button>
      </div>
    
    );
  }
  return null;
}

export default Functionsinglepost;

