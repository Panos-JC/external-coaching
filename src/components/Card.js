import { Link } from "react-router-dom";
import "../routes/App.css";

function Card({title, text, id}) {
    return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="content">{text}</p>
      <Link to={`/post/${id}`}><button className="btn">View post</button></Link>
    </div>
    );
};

export default Card;