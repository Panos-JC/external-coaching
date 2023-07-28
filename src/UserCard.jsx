import "./App.css";

const UserCard = () => {
  return (
    <div className="user-card">
      <img
        className="avatar"
        src={"https://ui-avatars.com/api/?name=John+Doe"}
        alt="User Avatar"
      />
      <div className="user-info">
        <p className="full-name">{`${"firstName"} ${"lastName"}`}</p>
        <p className="username">@{"username"}</p>
      </div>
    </div>
  );
};

export default UserCard;
