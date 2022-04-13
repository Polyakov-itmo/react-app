import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/Navbar";
import News from "./components/News";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import { Authorization } from "./redux/actions";

function App({ authorized, Authorization }) {
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth == null) {
      localStorage.setItem("auth", false);
      localStorage.setItem("login", "");
    } else if (auth === "true") {
      const login = localStorage.getItem("login");
      Authorization(login);
    }
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={authorized ? <Profile /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    authorized: state.auth.authorized,
    login: state.auth.login,
  };
};
const mapDispatchToProps = {
  Authorization,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
