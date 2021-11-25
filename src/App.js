import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">What would you like to look up?</header>
      <main>
        <Dictionary />
      </main>
      <footer>
        Coded by Hannah Nixon, open-sourced on{" "}
        <a
          href="https://github.com/hannahmnixon/dictionary-project"
          className="FooterLink"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        , hosted on{" "}
        <a
          href="https://romantic-hodgkin-ba6d8f.netlify.app"
          className="FooterLink"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
