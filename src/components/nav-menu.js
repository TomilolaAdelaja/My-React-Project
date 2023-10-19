import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navigation = () => {
  const {user} = useAuth()
  const navigate = useNavigate()
  const {logout} = useAuth()
  const handleLogout = (e) => {
    e.preventDefault();
    logout()
    navigate('/login')
}
  return (
    
    <nav>
      <ul className="flex">
        <li>
          <Link to="/">Home</Link>
        </li>


        {user && <li>
          <Link to="profile">Profile</Link>
        </li>}
        <li>
          <Link to="login">Login</Link>
        </li>
        {user && <li onClick={handleLogout}>
          Logout
        </li>}
      </ul>
    </nav>
  );
};

export default Navigation;
