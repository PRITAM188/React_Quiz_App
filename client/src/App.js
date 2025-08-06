import React from "react";
import NavBar from "./pages/NavBar";
import AdminPage from "./pages/AdminPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<QuizPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;