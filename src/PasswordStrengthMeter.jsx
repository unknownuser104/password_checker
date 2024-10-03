import React, { useState } from 'react';

const getStrength = (password) => {
  if (password.length < 6) return 'Too short';
  if (password.length < 8) return 'Weak';
  if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) return 'Medium';
  if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password)) return 'Strong';
  return 'Very Strong';
};

const PasswordStrengthMeter = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('Too short');

  const handleChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setStrength(getStrength(newPassword));
  };

  const getStrengthColor = () => {
    switch (strength) {
      case 'Too short':
        return 'red';
      case 'Weak':
        return 'orange';
      case 'Medium':
        return 'yellow';
      case 'Strong':
        return 'lightgreen';
      case 'Very Strong':
        return 'green';
      default:
        return 'red';
    }
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <div
        style={{
          height: '10px',
          width: '100%',
          backgroundColor: getStrengthColor(),
          transition: 'background-color 0.3s',
        }}
      ></div>
      <p>Password strength: {strength}</p>
    </div>
  );
};

export default PasswordStrengthMeter;
