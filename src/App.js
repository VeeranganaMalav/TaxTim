// import "./App.css";
import CapitalGains from "./Components/CapitalGains";
import IncomeTaxCalculator from "./Components/IncomeTaxCalculator";
import { AllRoutes } from "./Components/AllRoutes";
import { Navbar } from "./Components/Navbar";
// import { Contact } from './Pages/Contact';
// import { FAQ } from './Pages/FAQ';
import { Login } from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <IncomeTaxCalculator /> */}
      {/* <CapitalGains /> */}
      <AllRoutes />
      <Login />
    </div>
  );
}

export default App;
