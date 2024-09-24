import "./App.css";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./components/layout/MainLayout";
import KpiGrading from "./pages/KpiGrading";
import KpiCard from "./components/KpiCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
        <Route
          path="/KpiGrading"
          element={
            <MainLayout>
              <KpiGrading />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
