import './cardStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGgCircle, faHackerNews} from '@fortawesome/free-brands-svg-icons';
import linkimg from './img.jpg';
import { AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { MdVerified, MdArrowForwardIos } from 'react-icons/md';


function Card({user, description, title, subtitle, url, numOfHearts, numOfComments, dateCreated, commentURL}) {
  return (
    <div className="container">

      <div className='user-info'>

        <div className='username'>
            <div className='icon'>
                <div className='circle'>
                    <FontAwesomeIcon className="twitter" icon={faTwitter}/>
                </div>
                
            </div>

            <div className='info'>
                <div className='text'>
                    <p className='header'>{user} <MdVerified className="verified"/></p>
                    <p className='sub-header'>@{user}</p>
                </div>
            </div>

        </div>

        <div className='twitter-logo'>
            <FontAwesomeIcon className="twitter-right" icon={faTwitter}/>
        </div>
      </div>

      <div className='tweet'>
        <p>{description}</p>
      </div>

      <div className='frame'>
            <img className='link-img' src={linkimg} alt="image from link"></img>
            <div className='img-caption'>
                <div className='caption-content'>
                    <p className='img-title'>{title}</p>
                    <p className='img-subtitle'>{subtitle}</p>
                    <p className='img-url'><a href={url} target="_blank">Link Here</a></p>
                </div>
            </div>
      </div>

      <div className='tweet-info'>
        <div className='likes-date'>
            <p className='likes'><AiOutlineHeart className="hearts"/>{numOfHearts}</p>
            <p className='date'>{dateCreated}</p>
        </div>

        <AiOutlineInfoCircle className="more-info"/>
      </div>

      <a href={commentURL} target="_blank">
        <div className='comments-info'>
              <p className='people'><FaRegComment className="comments"/>{numOfComments} people are talking about this</p>
              <MdArrowForwardIos className="arrow"/>
        </div>
      </a>

    </div>
  );
}

export default Card;