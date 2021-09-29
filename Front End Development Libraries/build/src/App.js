import './css/App.css';

const App = () => {
  return (
    <div id="quote-box">
      <div className="quote-text">
        <span id="text">Fall seven times and stand up eight.</span>
      </div>
      <div className="quote-author">
        <p id="author">- Japanese Proverb</p>
      </div>
      <div className="buttons">
        <button id="new-quote">New quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet" type="_blank">Tweet</a>
      </div>
    </div>
  );
}

export default App;
