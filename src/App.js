import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
        <p>
          clynn.us
        </p>
        <a
          className="App-link"
                  href="https://github.com/ItSeemedLikeAGoodIdeaAtTheTime/ItSeemedLikeAGoodIdeaAtTheTime.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
