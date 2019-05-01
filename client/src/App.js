import React from "react";
import ShowCustomers from "./components/ShowCustomers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Customers List from MySQL database</h1>
      <ShowCustomers></ShowCustomers>
    </div>
  );
}

export default App;
