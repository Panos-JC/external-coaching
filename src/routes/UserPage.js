import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md';
import{AiOutlineLink} from 'react-icons/ai';
import { PiDotsThreeCircleVertical } from 'react-icons/pi';
import { HiOutlineMail } from 'react-icons/hi';
import Card from "../components/Card";

function UserPage() {
    let { userId } = useParams();

    const [users, setUsers] = useState([]);
    useEffect (
      () => {
        // Retrieve users
        const fetchData = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userId);
          const users = await response.json();
          setUsers(users);
        };
        fetchData();
      },
      []
    );

    const [post, setPost] = useState([]);
    useEffect(
      () => {
        // Retrieve data
        const fetchData = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
          const post = await response.json();
          setPost(post);
          console.log(post)
        };
  
        fetchData();
      },
      []
    );

    return(
        <div className="container">
           <div className="account-card">
                <div className="back-photo">
                    <FaUserCircle className="user-icon"/>
                </div>
                <div className="us-info">
                    <div className="buttons">
                      <PiDotsThreeCircleVertical className="dots"/>
                      <button className="follow">Follow</button>
                    </div>
                    <div className="txt">
                      <p className='header'>{users.name}<MdVerified className="verified"/></p>
                      <p className='sub-header'>@{users.username}</p>
                      <p className='sub-header'> <HiOutlineMail className="website"/> {users.email}</p>
                      <p className='sub-header'> <AiOutlineLink className="website"/> {users.website}</p>
                    </div>
                    <div className="tweets">
                      <p className="title">Tweets</p>
                      {post.map((post) => (
                        <Card
                          fullname={users.name}
                          username={users.username}
                          title={post.title}
                          text={post.body}
                          id={post.id}
                          isHome={true}
                          userId={userId}
                        />
                      ))}
                    </div>
                    
                </div>
           </div>
        </div>
        
    )
}

export default UserPage;