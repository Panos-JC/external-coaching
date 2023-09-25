import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa'
import { MdVerified, MdArrowForwardIos } from 'react-icons/md';

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


    return(
        <div className="container">
            {/* <h1>Name: {users.name}</h1>
            <h1>Username: {users.username}</h1>
            <h1>Website: {users.website}</h1> */}
           <div className="account-card">
                <div className="back-photo">
                    <FaUserCircle className="user-icon"/>
                </div>
                <div className="us-info">
                    <p className='header'>{users.name}<MdVerified className="verified"/></p>
                    <p className='sub-header'>@{users.username}</p>
                    <p className='sub-header'>{users.website}</p>
                </div>
           </div>
        </div>
        
    )
}

export default UserPage;