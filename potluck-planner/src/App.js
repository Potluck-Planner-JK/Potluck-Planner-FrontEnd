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
        <Login />
        <Register />
      </div>
    </Router>
  )
}

export default App;