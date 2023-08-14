import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p><Link to='/register'>регистрация</Link></p>
    </div>
  );
};