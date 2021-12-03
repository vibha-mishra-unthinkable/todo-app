import "../src/assets/styles/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Login from "../src/components/Login/Login";
import SignUp from "../src/components/SignUp/SignUp";
import Home from "../src/components/Home/Home";
import Products from "../src/components/Product/Products";
import Cart from "../src/components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <div className="authWrapper">
        <div className="authInner">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login/home" element={<Home />} />
            <Route path="/home/products" element={<Products />} />
            <Route path="/home/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
