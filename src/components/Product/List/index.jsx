import { useContext } from "react";
import ProductContext from "../../../contexts/Product/ProductContext";

const ProductList = () => {
  const ctx = useContext(ProductContext);
  console.log('ctx de productos:', ctx);

  return (
    <div>Lista de Productos</div>
  )
}

export default ProductList;