import { useState } from "react";
import "./App.css";
import Layout from "./Layout";
import Main from "./Main";
import MainNavigation from "./MainNavigation";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Layout Main={Main} MainNavigation={MainNavigation} Sidebar={Sidebar} />
  );
}

export default App;
