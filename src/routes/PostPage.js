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

      // Function that returns the username of the user based on userId
    const findUsername = (array, id) => {
      const user = array.find((user) => user.id === id);
      return user ? user.username : 'Unknown user';
    }

    // Function that returns the username of the user based on userId
    const findFullname = (array, id) => {
      const user = array.find((user) => user.id === id);
      return user ? user.name : 'Unknown name';
    }


    return <div className="App">
          <Card
            fullname={findFullname(users, post.id)}
            username={findUsername(users, post.id)}
            title={post.title}
            text={post.body}
            id={post.id}
            num = {comment.length}
          />
          <div className="comments-section">
            {comment.map((item) => 
              <Comment
                name={item.name}
                mail={item.email}
                body={item.body}
              />
            )}
          </div>
    </div>;
}

export default PostPage;