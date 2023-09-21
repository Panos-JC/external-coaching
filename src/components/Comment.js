

function Comment({username, name, mail, body}) {
    return (
    <div className="comment-card">
        <h3 className="mail">{mail}: {username}</h3>
        <h2 className="name">{name}</h2>
        <p className="body">{body}</p>
    </div>
    );
};

export default Comment;