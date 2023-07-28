import UserCard from "./UserCard";

const Sidebar = () => {
  return (
    <>
      <UserCard />
      <ul>
        <li>
          <a href="#">Sidebar Item 1</a>
        </li>
        <li>
          <a href="#">Sidebar Item 2</a>
        </li>
        <li>
          <a href="#">Sidebar Item 3</a>
        </li>
        <li>
          <a href="#">Sidebar Item 4</a>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
