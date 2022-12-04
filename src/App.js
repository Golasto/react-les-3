import React, { useState } from 'react';
import './App.css';
import './Paginas/Home'
import { Home } from "./Paginas/Home.js";
import { Login } from "./Paginas/Login";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {BlogPost} from "./Paginas/BlogPosts";
import {Blog} from "./Paginas/Blog";
import Nav from "./Navbar"
import {Profilelock} from "./Paginas/profilelock";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
      <>
      <Router>
          <Nav isAuthenticated={ isAuthenticated} toggleIsAuthenticated={ toggleIsAuthenticated}></Nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/blogposts" element={<BlogPost />} />
              <Route path="/blogposts/:blogId" element={<Blog />} />
              <Route path="/profile-page" element={isAuthenticated ? <Profilelock/> : <Navigate to="/login"/> }/>
          </Routes>
      </Router>
    </>

  );
}

export default App
