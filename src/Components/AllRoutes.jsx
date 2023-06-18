import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import {FAQ} from "../Pages/FAQ"
import IncomeTaxCalculator from "./IncomeTaxCalculator";
import CapitalGains from "./CapitalGains";
import Calculators from "../Pages/Calculators";
import { Howitworks } from "../Pages/Howitworks";
// 
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/faq" element={<FAQ/>}></Route>
      <Route path="/calculators" element={<PrivateRoute><Calculators /></PrivateRoute>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/calculators/income-tax" element={<IncomeTaxCalculator />}></Route>
      <Route path="/calculators/capital-gains-tax" element={<CapitalGains />}></Route>
      <Route path="/epay-tax" element={<PrivateRoute><BillingPage /></PrivateRoute>}></Route>
      <Route path="/passwordReset" element={<PasswordReset />}></Route>
    </Routes>
  );
};
