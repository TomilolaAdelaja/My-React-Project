import React from 'react';
import { Link } from 'react-router-dom';
// import { useAuth } from './AuthContext';

const Navigation = () => {
//   // const {user} = useAuth()
//   // const navigate = useNavigate()
//   // const {logout} = useAuth()
//   // const handleLogout = (e) => {
//   //   e.preventDefault();
//   //   logout()
//   //   navigate('/login')
// }
  return (
    
    <nav>
      <ul className="flex">
        <li>
          <Link to="/">Home</Link>
        </li>


        {/* <li>
          <Link to="profile">Profile</Link>
        </li> */}
        <li>
          <Link to="login">Login</Link>
        </li>
        {/* <li>
          <Link to="/">Logout</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
