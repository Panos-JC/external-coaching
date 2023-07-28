import { useContext } from "react";
import "./App.css";
import { useUserContext } from "./context";

const MainNavigation = () => {
  const { username } = useUserContext();
  return (
    <>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div>@{username}</div>
    </>
  );
};

export default MainNavigation;
