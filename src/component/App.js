import React from "react";
import "./App.css";
import HistoryList from "./HistoryList";
import Calculator from "./Calculator";

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div className="component-app" style={{ flex: 1 }}>
        <Calculator />
      </div>
      <div style={{ width: 250, backgroundColor: 'white' }}>
        <HistoryList />
      </div>
    </div>
  );
}

export default App;
