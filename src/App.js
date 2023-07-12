import { useEffect, useState } from "react";
import "./App.css";
import { PiArrowCircleDownFill } from 'react-icons/pi';


function App() {
  // State
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [days, setDays] = useState("--");
  const [months, setMonths] = useState("--");
  const [years, setYears] = useState("--");

  // Handle input changes
  const handleDayChange = (e) => {
    setDay(e.target.value);
    // console.log("day: " + day);
  }

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    console.log("month: " + e.target.value);
  }

  const handleYearChange = (e) => {
    setYear(e.target.value);
    console.log("year: " + year);
  }

  useEffect(
    () => {
      console.log("day: " + day);
    },
    [day]
  )

  const calculateAge = () => {
    // Get current day, month and year
    const now = new Date();
    const thisDay = now.getDate();
    const thisMonth = now.getMonth() + 1;
    const thisYear = now.getFullYear();

    let days = thisDay - day;
    let months = thisMonth - month;
    let years = thisYear - year;

    setDays(days);
    setMonths(months);
    setYears(years);
    
  }
  
  return <>
  <div className="App">
    
    <div className="card">
      <div className="inputs">
          <div className="container">
            <label>Day</label>
            <input type="text" placeholder="DD" onChange={handleDayChange} value={day}/>
          </div>
          <div className="container">
            <label>Month</label>
            <input type="text" placeholder="MM" onChange={handleMonthChange} value={month}/>
          </div>
          <div className="container">
            <label>Year</label>
            <input type="text" placeholder="YYYY"  onChange={handleYearChange} value={year}/>
          </div>
      </div>

      <div className="divider">
        <hr/>
        <div className="icon" onClick={calculateAge}>
          <PiArrowCircleDownFill/>
        </div>
      </div>

      <div className="result">
        <h1><span>{years}</span> Years</h1>
        <h1><span>{months}</span> Months</h1>
        <h1><span>{days}</span> Days</h1>
      </div>
      
      

    </div>

    

  </div>

  
  </>
}

export default App;
