import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutCompany from "./pages/AboutCompany";
import AboutMe from "./pages/AboutMe";
import Members from "./pages/Members";
import Member from "./pages/Member";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="about-company" element={<AboutCompany />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="/members" element={<Members />} />
        <Route path=":memberName" element={<Member />} />
      </Routes>

      <Route
        path="/items"
        element={
          <ProtectedRoute>
            <Items />
          </ProtectedRoute>
        }
      >
        <Route path=":itemId" element={<item />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </div>
  );
}

export default App;
