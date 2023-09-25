import { Link } from "react-router-dom";
import "../routes/App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { MdVerified, MdArrowForwardIos } from 'react-icons/md';


function Card({title, text, id, username, fullname, num, isHome, userId}) {
    return (
    <div className="card">

      <div className='user-info'>
      
        <div className='username'>
            <div className='icon'>
                <div className='circle'>
                    <FontAwesomeIcon className="twitter" icon={faTwitter}/>
                </div>
            </div>

            <div className='info'>
                <div className='text'>
                <Link to={`/user/${userId}`}>
                    <p className='header'>{fullname}<MdVerified className="verified"/></p>
                    <p className='sub-header'>@{username}</p>
                </Link>
                </div>
            </div>
        </div>
        

        <div className='twitter-logo'>
            <FontAwesomeIcon className="twitter-right" icon={faTwitter}/>
        </div>
      </div>

      <div className='tweet'>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

      <div className='tweet-info'>
        <div className='likes-date'>
            <p className='likes'><AiOutlineHeart className="hearts"/>350</p>
            <p className='date'>6:26 PM - Sept 20, 2023</p>
        </div>

        <AiOutlineInfoCircle className="more-info"/>
      </div>

      <Link to={`/post/${id}`}>
        <div className='comments-info'>
              <p className='people'><FaRegComment className="comments"/>{isHome ? `View comments for this tweet` : `${num} people are talking about this`}</p>
              {isHome ? <MdArrowForwardIos className="arrow"/> : ''}
              
        </div>
        </Link>
    </div>
    );
};

export default Card;