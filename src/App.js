import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/product";
import Login from "./pages/login";
import Home from "./pages/home";
import Register from "./pages/Register";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<Products />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
