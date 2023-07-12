import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch("https://restcountries.com/v3.1/all")
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));

    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();

      setData(data.slice(0, 10));
    };

    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  useEffect(() => {
    if (data.length) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="App">
      {data.map(country => (
        <h5>{country.name.common}</h5>
      ))}
    </div>
  );
}

export default App;
