import "./App.css";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
      setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Logged in!");
    console.log(e);
  }

  return <>
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <label>Username</label>
        <input type="text" placeholder="username" value={username} onChange={handleUsernameChange}></input>

        <label>Password</label>
        <input type="password" placeholder="password" value={password} onChange={handlePasswordChange}></input>
      </div>

      <div className="submit-btn">
        <button type="submit" disabled={!(username && password) ? true : false}>Submit</button>
      </div>
    </form>
  </>;
}

export default App;
