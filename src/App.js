import "./App.css";
import { PiArrowCircleDownFill } from 'react-icons/pi';


function App() {


  
  return <>
  <div className="App">
    <div className="card">
      <div className="inputs">
          <div className="container">
            <label>Day</label>
            <input type="text" placeholder="DD"/>
          </div>
          <div className="container">
            <label>Month</label>
            <input type="text" placeholder="MM"/>
          </div>
          <div className="container">
            <label>Year</label>
            <input type="text" placeholder="YYYY"/>
          </div>
      </div>

      <div className="divider">
        <hr/>
        <div className="icon">
          <PiArrowCircleDownFill/>
        </div>
      </div>

      <div className="result">
        <h1><span>--</span> Years</h1>
        <h1><span>--</span> Months</h1>
        <h1><span>--</span> Days</h1>
      </div>
      
      

    </div>

    

  </div>

  
  </>
}

export default App;
