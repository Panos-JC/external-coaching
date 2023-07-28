import { useState } from "react";
import "./App.css";
import Layout from "./Layout";

import { UserContext } from "./context";

function App() {
  const [user, setUser] = useState({
    firstName: "Anastasia",
    lastName: "Boublini",
    username: "aboublini",
  });

  return (
    <UserContext.Provider value={user}>
      <Layout />
    </UserContext.Provider>
  );
}

export default App;
