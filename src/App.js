// import "./App.css";
import CapitalGains from "./Components/CapitalGains";
import IncomeTaxCalculator from "./Components/IncomeTaxCalculator";
import { AllRoutes } from "./Components/AllRoutes";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import Calculators from "./Pages/Calculators";
import BillingPage from "./Components/BillingPage";
import { FinalChat } from "./chatbot/FinalChatBot";

function App() {
  return (
    <div className="App">
      {/* <Calculators /> */}
      <Navbar />
      {/* <BillingPage /> */}
      {/* <Footer /> */}
      {/* <IncomeTaxCalculator /> */}
      {/* <CapitalGains /> */}
      <AllRoutes />
      <FinalChat/>

    </div>
  );
}

export default App;
