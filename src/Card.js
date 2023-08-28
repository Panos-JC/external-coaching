import "./App.css";

function Card({title, text}) {
    return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="content">{text}</p>
      <button className="btn">View post</button>
    </div>
    );
};

export default Card;