// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BooksDetailsPage from "./pages/BooksDetailsPage/BooksDetailsPage";
import BooksSearchPage from "./pages/BooksSearchpage/BooksSearchPage";
import BooksInfoPage  from "./pages/BooksInfoPage/BooksInfoPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar.jsx";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/booksdetails"
          element={
            <PrivateRoute>
              <BooksDetailsPage />
            </PrivateRoute>
          }
        />
          <Route
          path="/booksinfo"
          element={
            <PrivateRoute>
              <BooksInfoPage />
            </PrivateRoute>
          }
        />
          <Route
          path="/booksearch"
          element={
            <PrivateRoute>
              <BooksSearchPage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
