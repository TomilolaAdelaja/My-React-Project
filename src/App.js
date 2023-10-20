import React, {useState} from "react";
import Home from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./pages/login";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Dashboard from "./dashboard";
import NotFound from "./pages/NotFoundPage";
import { AuthProvider } from "./components/AuthContext";
import Navigation from "./components/nav-menu";
import "./App.css";
import "./dashboard";
import DashSharedLayout from "./dashboardLayout";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='Profile' element={<Profile />} />

          {/* <Route path='products' element={<SharedProductLayout />}> */}
            {/* <Route index element={<Products />} /> */}
            {/* <Route path=':productId' element={<SingleProduct />} /> */}
          {/* </Route> */}

          <Route path='login' element={<Login setUser={setUser}></Login>} />
          
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route
            path='dashboard'
            element={

              <ProtectedRoute user={user}>
                <DashSharedLayout user={user} />
              </ProtectedRoute>
            }
          >
            <Route index element={<Profile />} />

          </Route>
      </Routes>
      
    </BrowserRouter>
  )
  // return (
  //   <AuthProvider>
  //     <BrowserRouter>
  //     <Navigation />
  //       <Routes>
  //         <Route element={<SharedLayout />}>
  //           <Route path="/" element={<Home />} />
  //           <Route path="Profile" element={<Profile />} />
            
  //         </Route>
  //         <Route path="Login" element={<Login />} />
  //         <Route path="*" element={<NotFound />} />
  //       </Routes>
  //     </BrowserRouter>
  //   </AuthProvider>
  // );
}

export default App;
