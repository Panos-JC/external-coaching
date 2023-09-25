import "../routes/App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { MdVerified, MdArrowForwardIos } from 'react-icons/md';

function Comment({name, mail, body}) {
    return (
    <div className="comment-card">

        <div className='user-info'>
            <div className='username'>
                <div className='icon'>
                    <div className='circle'>
                        <FontAwesomeIcon className="twitter" icon={faTwitter}/>
                    </div>
                </div>

                <div className='info'>
                    <div className='text'>
                        <p className='header'>{mail}<MdVerified className="verified"/></p>
                        <p className='sub-header'>@username</p>
                    </div>
                </div>
            </div>
            <div className='twitter-logo'>
                <FontAwesomeIcon className="twitter-right" icon={faTwitter}/>
            </div>
      </div>

      <div className='tweet'>
        <h3>{name}</h3>
        <p>{body}</p>
      </div>

    </div>
    );
};

export default Comment;