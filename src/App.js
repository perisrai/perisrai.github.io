import React from "react";
import Home from "components/new/home";

import "./App.css";
import TitleMessage from "components/title-message/title-message.component";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
       <TitleMessage />
      <Home/>
    </div>
  );
}

export default App;
