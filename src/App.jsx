import React from 'react';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import './App.css'; // Ensure this path is correct

function App() {
  return (
    <div className="app-container">
      <h1>Password Strength Meter</h1>
      <PasswordStrengthMeter />
    </div>
  );
}

export default App;
