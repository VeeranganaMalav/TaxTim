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

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
      {/* <IncomeTaxCalculator /> */}
      <CapitalGains />
    </div>
  );
}

export default App;
