import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SignUp from "./Components/Auth/SIgnUp/SignUp";
import SignIn from "./Components/Auth/SignIn/SignIn";
import Layout from "./Components/Layout/Layout";

const App = () => {
  console.log("app");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
