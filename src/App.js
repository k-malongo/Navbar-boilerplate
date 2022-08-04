import Navbar from "./components/navbar/Navbar"
import Products from "./components/products/Products"
import { Route, Routes } from "react-router-dom";
import Home from "./components/products/Home/Home";
function App() {
  return (
    <>

    <Navbar/>
    <Routes>
      <Route path="/products" element={<Products />}/ >
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}
 
export default App;
 