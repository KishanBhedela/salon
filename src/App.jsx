import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Servicesdetail from "./pages/Servicesdetail.jsx";
import Category from "./pages/Category.jsx";
import Signup from "./pages/Signup";
import Login from "./pages/login";
import Servicebysubcategory from "./pages/Servicebysubcategory.jsx"
import Categorybycategory from "./pages/Categorybycategory";
import { AuthProvider } from "./context/AuthContext";
import "./pages/style.css"
import Services from "./pages/services.jsx";
import Profile from "./pages/Profile.jsx";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/servicesbysubcategory/:subid/Servicesdetail/:id" element={<Servicesdetail />} />
          <Route path="/Servicesdetail/:id" element={<Servicesdetail />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/catagrybycategry/:id" element={< Categorybycategory/>} />
          <Route path="/servicesbysubcategry/:id" element={<Servicebysubcategory/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
