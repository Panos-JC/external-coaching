
import './App.css';
import Card from './components/card';

function App() {

  const twitterCard = {
      user: 'aboublini',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
      'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim' +
       'veniam, quis nostrud exercitation ullamco.',
      title: 'This is the image title',
      subtitle: 'Image subtitle',
      url: 'https://www.developerdrive.com/wp-content/uploads/2019/11/twitter-summary-card-large-image.jpg',
      numOfHearts: 890,
      numOfComments: 345,
      dateCreated: '6:26PM - Apr. 30, 2023',
      commentURL: 'https://www.developerdrive.com/wp-content/uploads/2019/11/twitter-summary-card-large-image.jpg'
  }

  return (
    <div className="App">
      <Card
        user = {twitterCard.user}
        description = {twitterCard.description}
        title = {twitterCard.title}
        subtitle = {twitterCard.subtitle}
        url = {twitterCard.url}
        numOfHearts = {twitterCard.numOfHearts}
        numOfComments = {twitterCard.numOfComments}
        dateCreated = {twitterCard.dateCreated}
        commentURL = {twitterCard.commentURL}
      />
    </div>
  );
}

export default App;
