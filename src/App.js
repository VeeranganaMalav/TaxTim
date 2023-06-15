import "./App.css";
import { AllRoutes } from "./Components/AllRoutes";
import { Navbar } from "./Components/Navbar";
// import { Contact } from './Pages/Contact';
// import { FAQ } from './Pages/FAQ';
// import { Login } from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
