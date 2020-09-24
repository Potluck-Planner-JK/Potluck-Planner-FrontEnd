import React from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register'
import GuestForm from './components/guests/GuestForm'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      <GuestForm />
    </div>
  );
}

export default App;
