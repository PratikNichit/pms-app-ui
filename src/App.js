import "./App.css";
import HomePage from "./pages/HomePage";
import { Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
