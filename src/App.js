// import "./App.css";
import CapitalGains from "./Components/CapitalGains";
import IncomeTaxCalculator from "./Components/IncomeTaxCalculator";
import { AllRoutes } from "./Components/AllRoutes";
import { Navbar } from "./Components/Navbar";
import { Login } from "./Pages/Login";
import { FAQ } from "./Pages/FAQ";
// import { Contact } from './Pages/Contact';
// import { FAQ } from './Pages/FAQ';
// import { Login } from './Pages/Login';
import { Footer } from "./Components/Footer";
import Calculators from "./Pages/Calculators";
import BillingPage from "./Components/BillingPage";

function App() {
  return (
    <div className="App">
      {/* <Calculators /> */}
      {/* <Navbar /> */}
      {/* <AllRoutes /> */}
      <BillingPage />
      {/* <Footer /> */}
      {/* <IncomeTaxCalculator /> */}
      {/* <CapitalGains /> */}
    </div>
  );
}

export default App;
