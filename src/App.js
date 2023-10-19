import React from "react";
import Home from "./pages/HomePage";
import Login from "./pages/login";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import NotFound from "./pages/NotFoundPage";
import { AuthProvider } from "./components/AuthContext";
import Navigation from "./components/nav-menu";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="Profile" element={<Profile />} />
            
          </Route>
          <Route path="Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
