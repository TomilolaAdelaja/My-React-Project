import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const NotFound = () => {
  return (
    <div className="center App">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to='/'>Back Home</Link>
    </div>
  );
};

export default NotFound;
