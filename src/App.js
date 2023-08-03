import { useState } from "react";
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

  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  const initialValues = {
    day: '',
    month: '',
    year: ''
  }

  const [error, setError] = useState(initialValues)

  // Handle input changes and error messages
  const handleDayChange = (e) => {
    setDay(e.target.value);
    if (e.target.value !== "") {
      if (e.target.value < 1 || e.target.value > 31) {
        setDayError({...error, day: "Must be a valid day"})
      } 
      else {
        setDayError(initialValues)
      }
    }
    else {
      setDayError(initialValues)
    }
  }

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    if (e.target.value !== "") {
      if (e.target.value < 1 || e.target.value > 12) {
        setMonthError("Must be a valid month")
      } 
      else {
        setMonthError("")
      }
    }
    else {
      setMonthError("")
    }
  }

  const handleYearChange = (e) => {
    setYear(e.target.value);
    if (e.target.value !== "") {
      const now = new Date();
      if (e.target.value > now.getFullYear()) {
        setYearError("Must be in the past")
      }
      else {
        setYearError("")
      }
    }
    else {
      setYearError("")
    }
  }

  const calculateAge = () => {
    // Check if all inputs are valid
    if (!day || !month || !year || dayError || monthError || yearError) {
      setYears("--");
      setMonths("--");
      setDays("--");  
      return;
    }

    // Get current day, month and year
    const now = new Date();
    const thisDay = now.getDate();
    const thisMonth = now.getMonth() + 1;
    const thisYear = now.getFullYear();

    // Convert inputs to int
    const intDay = parseInt(day);
    const intMonth = parseInt(month);
    const intYear = parseInt(year);
 
    // Calculate age
    let calcYears = thisYear - intYear;
    let calcMonths = thisMonth - intMonth;
    let calcDays = thisDay - intDay;

    // If birth month is in the futute or birthmonth is current month
    if (calcMonths < 0 || (calcMonths === 0 && calcDays < 0)) {
      // Go back one year
      calcYears = calcYears - 1;
      calcMonths = calcMonths + 12;
    }

    // If birth day is in the future
    if (calcDays < 0) {
      // Go back one month
      calcMonths = calcMonths - 1;

      // Find days left
      let daysLeft;
      if (thisMonth === 1) { // January
        daysLeft = 12
      } 
      else { // Every other month
        daysLeft = thisMonth - 1;
      }

      calcDays = calcDays + daysLeft;
    }


    // Update state variables for years, months, and days
    setYears(calcYears);
    setMonths(calcMonths);
    setDays(calcDays);   
    
  }


  
  return <>
  <div className="App">
    
    <div className="card">
      <div className="inputs">
          <div className="container">
            <label className={dayError ? 'error-label' : ''}>Day</label>
            <input type="text" placeholder="DD" className={dayError ? 'error-border' : ''} onChange={handleDayChange} value={day}/>
            <p className="error">{dayError}</p>
          </div>
          <div className="container">
            <label className={monthError ? 'error-label' : ''}>Month</label>
            <input type="text" placeholder="MM" className={monthError ? 'error-border' : ''} onChange={handleMonthChange} value={month}/>
            <p className="error">{monthError}</p>
          </div>
          <div className="container">
            <label className={yearError ? 'error-label' : ''}>Year</label>
            <input type="text" placeholder="YYYY" className={yearError ? 'error-border' : ''} onChange={handleYearChange} value={year}/>
            <p className="error">{yearError}</p>
          </div>
      </div>

      <div className="divider">
        <hr/>
        <div className="icon" onClick={calculateAge}>
          <PiArrowCircleDownFill/>
        </div>
      </div>

      {/* {
        !!dayError && (
        <div className="divider">
          <hr/>
          <div className="icon" onClick={calculateAge}>
            <PiArrowCircleDownFill/>
          </div>
        </div>)
      } */}

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
