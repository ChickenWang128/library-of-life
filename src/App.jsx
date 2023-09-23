import React from "react";
import MediaContainer from "./components/MediaContainer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="logo"> Library Of Life</h1>
      <div className="container">
        <MediaContainer />
      </div>
    </div>
  );
};

export default App;

