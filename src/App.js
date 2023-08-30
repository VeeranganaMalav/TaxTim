// import "./App.css";
import { AllRoutes } from "./Components/AllRoutes";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { FinalChat } from "./chatbot/FinalChatBot";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
      <FinalChat />
    </div>
  );
}

export default App;
