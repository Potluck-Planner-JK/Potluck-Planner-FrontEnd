import React from 'react';
import './App.css';
import PrivateRoute from "./Utils/PrivateRoute"
import Login from "./Components/Login"
import { Router, Switch, Route } from "react-router-dom"
import Register from "./Components/Register"



function App() {
  return (
    <Router>
      <div className="App">
        <h1>Potluck Planner</h1>
        <Login />
      </div>
    </Router>
  )
}

export default App;