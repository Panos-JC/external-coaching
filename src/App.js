import { useState } from "react";
import "./App.css";
import Card from "./Card";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState();

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

  // console.log(data);
  

  // const contents = {
  //   title: "This is the card's title",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  // } 
  return <div className="App">
    {/* <Card
      title={contents.title}
      text={contents.text}
    /> */}

      {data.map(post => (
        <Card
          title={post.title}
          text={post.body}
        />
      ))}
  </div>;
}

export default App;
