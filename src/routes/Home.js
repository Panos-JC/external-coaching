import { useState } from "react";
import "./App.css";
import Card from "../components/Card";
import { useEffect } from "react";

function Home() {
    const [data, setData] = useState([]);
    useEffect(
      () => {
        // Retrieve data
        const fetchData = async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const data = await response.json();
          setData(data);
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
        {data.map(({title, body, id, userId}) => (
          <Card
            fullname={findFullname(users, userId)}
            username={findUsername(users, userId)}
            title={title}
            text={body}
            id={id}
            isHome={true}
            userId={userId}
          />
          ))}
    </div>;
}

export default Home;