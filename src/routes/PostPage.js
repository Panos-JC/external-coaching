import React from "react";
import { useState } from "react";
import "./App.css";
import Card from "../components/Card";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function PostPage() {
    const [post, setPost] = useState([]);
    let { id } = useParams();
    useEffect(
      () => {
        // Retrieve data
        const fetchData = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
          const post = await response.json();
          setPost(post);
        };
  
        fetchData();
      },
      []
    );
  
    return <div className="App">
          <Card
            title={post.title}
            text={post.body}
            id={post.id}
          />
    </div>;
}

export default PostPage;