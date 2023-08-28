import "./App.css";
//BiSolidUser
import { PiCurrencyDollarSimpleBold } from 'react-icons/pi';
import { BiSolidUser } from 'react-icons/bi';
import { useState, useEffect } from "react";

function App() {
  const [tipPerson, setTipPerson] = useState(0);
  const [totalPerson, setTotalPerson] = useState(0);
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);

  const handleBillChange = (e) => {
    setBill(e.target.value);
    console.log("Bill: " + e.target.value);
  }

  const handlePeopleChange = (e) => {
    setPeople(e.target.value);
    console.log("People: " + e.target.value);
  }

  const handleTip = (percentage) => {
    setTip(percentage);
    console.log("Tip: " + percentage);
  }

  const handleReset = () => {
    setTipPerson(0);
    setTotalPerson(0);
    setBill(0);
    setTip(0);
    setPeople(0);
  }

  // Everytime there is a change in bill tip and people do calculations
  useEffect(() => {
    setTipPerson((bill * tip) / 100);
    if (people !== 0) { // This way we handle NaN in total per person
      setTotalPerson((bill/people) + (bill * tip) / 100);
    } else {
      setTotalPerson(0);
    }
    
  }, [bill, tip, people]);

  // Refresh
  useEffect(() => {
    handleReset();
  }, []);

  useEffect(() => {
    console.log(totalPerson);
  }, [totalPerson]);

  return <div className="App">
    <div className="card">

      <div className="inputs">

        <div className="bill">
          <h3>Bill</h3>
          <div className="bill-cont">
            <div className="icon"><PiCurrencyDollarSimpleBold/></div>
        
            <input className="bill-inpt" type="number" min="0" value={bill} onChange={handleBillChange}></input>
          </div> 
        </div>

        <div className="tip">
           <h3>Select tip %</h3>
           <div className="tip-selection">
            <button className="default-tip" onClick={() => handleTip(5)}>5%</button>
            <button className="default-tip" onClick={() => handleTip(10)}>10%</button>
            <button className="default-tip" onClick={() => handleTip(15)}>15%</button>
           </div>
           <div className="tip-selection">
            <button className="default-tip" onClick={() => handleTip(25)}>25%</button>
            <button className="default-tip" onClick={() => handleTip(50)}>50%</button>
            <input className="custom-tip" type="number" min="0" placeholder="Custom"  onChange={(e) => handleTip(e.target.value)}></input>
           </div>
        </div>

        <div className="people">
          <h3>Number of people</h3>
          <div className="people-cont">
            <div className="icon"><BiSolidUser/></div>
        
            <input className="people-inpt" type="number" value={people} min="0" onChange={handlePeopleChange}></input>
          </div> 
        </div>
      </div>

      <div className="results">
        <div className="box">
          <div className="left">
            <h3>Tip Amount</h3>
            <p>/ person</p>
          </div>
          <div className="right">
            <h1>${tipPerson}</h1>
          </div>
        </div>


        <div className="box">
          <div className="left">
            <h3>Total</h3>
            <p>/ person</p>
          </div>
          <div className="right">
            <h1>${totalPerson === Infinity ? 0 : totalPerson}</h1>
          </div>
        </div>
        
        <div className="reset">
          <button className="rst-btn" onClick={handleReset}>
            RESET
          </button>
        </div>
      </div>

    </div>
  </div>;
}

export default App;
