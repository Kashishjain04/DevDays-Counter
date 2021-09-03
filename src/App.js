import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://d1fdloi71mui9q.cloudfront.net/Ttd7vJ9SwuKtWjj6L1Al_K8plI9Y5K7bp60dL"
          className="App-logo"
          alt="logo"
        />
        <Counter />
      </header>
      <footer>Kashish Jain &copy; {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;
