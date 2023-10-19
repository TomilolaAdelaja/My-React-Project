import React from 'react';
import { useAuth } from '../components/AuthContext';
// import {Link} from 'react-router-dom';
// import { useCurrentUser } from '../hooks/currentUser';

const Profile = () => {
  const {user} = useAuth()
  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   const user = localStorage.getItem('fakeAuthUser');
  //   setCurrentUser(user);
  // // }, []);

  return (
    <div>
      <h2>Profile Page</h2>
      
      {
        user ? <h2>Welcome {user.userName}</h2>:<p>You need to log in to view this page</p>
      }
      {/* {currentUser ? (
        <p>Logged in as: {currentUser}</p>
      ) : (
        <p>You need to log in to view this page.</p>
      )} */}
    </div>
  );
};

export default Profile;
