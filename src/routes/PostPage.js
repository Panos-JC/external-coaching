import React from "react";
import { useState } from "react";
import "./App.css";
import Card from "../components/Card";
import Comment from "../components/Comment";
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

    const [comment, setComment] = useState([]);

    useEffect (
      () => {
        // Retrieve comments
        const fetchData = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id);
          const comment = await response.json();
          setComment(comment);
        };
        fetchData();
      },
      []
    );

    const [users, setUsers] = useState([]);
    useEffect (
      () => {
        // Retrieve users
        const fetchData = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const users = await response.json();
          setUsers(users);
          console.log(users)
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
          <div className="comments-section">
            <h2>Comments for this post:</h2>
            {comment.map((item) => 
              <Comment
                username={users.find((user) => user.email === item.email)}
                name={item.name}
                mail={item.email}
                body={item.body}
              />
            )}
          </div>
    </div>;
}

export default PostPage;