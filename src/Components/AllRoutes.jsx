import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/contact" element={<p>Contact</p>}></Route>
      <Route path="/faq" element={<p>FAQ</p>}></Route>
      <Route path="/calculators" element={<p>Calculators</p>}></Route>
      <Route path="/login" element={<p>Login</p>}></Route>
    </Routes>
  );
};
