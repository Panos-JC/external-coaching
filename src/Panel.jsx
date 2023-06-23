import { useState } from "react";

function Panel({title, content, open, onClick}) {

    return (
      <div className="panel">
        <h2>{title}</h2>
        {open ? <p>{content}</p> :
        <button onClick={onClick}>
            Show
        </button>}
      </div>
    );
}

export default Panel;