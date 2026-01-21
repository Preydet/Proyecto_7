import { useContext } from "react";
import ProductContext from "../../../contexts/Product/ProductContext";

const ProductList = () => {
  const ctx = useContext(ProductContext);
  const { products } = ctx;

  return (
    <div>
      Lista de Productos
      {
        products.map( product => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            </div>
        ))
      }            
    </div>
        
  )
}

export default ProductList;