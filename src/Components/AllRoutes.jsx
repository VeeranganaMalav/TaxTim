import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import {FAQ} from "../Pages/FAQ"
import IncomeTaxCalculator from "./IncomeTaxCalculator";
import CapitalGains from "./CapitalGains";
import Calculators from "../Pages/Calculators";
import PasswordReset from "../Pages/PasswordReset";
import { Howitworks } from "../Pages/Howitworks";
import { Contact } from "../Pages/Contact";
// 
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/faq" element={<FAQ/>}></Route>
      <Route path="/calculators" element={<Calculators />}></Route>
      <Route path="/login" element={<p>Login</p>}></Route>
      <Route path="/calculators/income-tax" element={<IncomeTaxCalculator />}></Route>
      <Route path="/calculators/capital-gains-tax" element={<CapitalGains />}></Route>
      <Route path="/passwordReset" element={<PasswordReset />}></Route>
      <Route path="/howitworks" element={<Howitworks />}></Route> 
    </Routes>
  );
};
