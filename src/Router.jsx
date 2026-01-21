import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout";
import Home from "./components/Home";
import ProductState from "./contexts/Product/ProductState";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import ProductList from "./components/Product/List/index";
import SingleProduct from "./components/Product";

const Router = () => {
  return (
    <ProductState>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/iniciar-sesion" element={<Login />} />
                <Route path="/productos" element={<ProductList />} />
                <Route path="/productos/:slug" element={<SingleProduct />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </ProductState>
    
  )
}

export default Router;