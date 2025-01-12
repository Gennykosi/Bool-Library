import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/Navbar";
import BookDetailsPage from "./pages/BookDetailsPage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/BookDetailsPage" element={<BookDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
