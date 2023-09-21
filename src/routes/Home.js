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
  
    return <div className="App">
  
  
        {data.map(({title, body, id}) => (
          <Card
            title={title}
            text={body}
            id={id}
          />
        ))}
    </div>;
}

export default Home;