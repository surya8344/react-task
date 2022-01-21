import axios from "axios";
import React, { Component } from "react";
import Post from "../post/post";
import { API_DATA } from "./axiosData";

export default class Posts extends Component {
    constructor(props){
        super(props);
        this.state ={
            posts: [],
        }
    }
    componentDidMount() {
        axios.get(
            API_DATA).then((response) => {
            const posts = [];
            for (let key in response.data) {
                posts.push({ ...response.data[key], id: key })
            }
         this.setState({
             posts:posts,
         })
        })
    }
 render() {
     
    const posts = this.state.posts.push.map((post) => {
        return <Post key={post.id} post={post}/>;
    });    
     return ( 
      <div> 
         <h1>Posts data</h1>
         <div>
             {posts}
         </div>
      </div>
        )
      }
    }

