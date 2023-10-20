import React from "react";
// const AuthContext = createContext();
// import { useAuth } from "../components/AuthContext";
// import {Link} from 'react-router-dom';
// import { useCurrentUser } from '../hooks/currentUser';

const Profile = ({user}) => {
  // const { user } = useAuth();
  // const [currentUser, setCurrentUser] = useState(null);

  // // useEffect(() => {
  // //   const user = localStorage.getItem('fakeAuthUser');
  // //   setCurrentUser(user);
  // // // }, []);
  // useEffect(() => {
  //   const storedUser = JSON.parse(localStorage.getItem("user"));
  //   if (storedUser) {
  //     setUser(storedUser);
  //   }
  // }, []);

  // // const login = (owner) => {
  // //   setUser(owner);
  // //   localStorage.setItem('user', JSON.stringify(owner))
  // // }
  
  // // const logout = (owner) => {
  // //   setUser(null);
  // //   localStorage.removeItem('user')
  // }

  return (
    <section className='section'>
      <h4>Hello, {user?.name}</h4>
    </section>
     
  )
}

export default Profile;
