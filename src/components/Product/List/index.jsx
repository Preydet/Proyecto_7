import { useContext, useEffect, useState } from "react";
import ProductContext from "../../../contexts/Product/ProductContext";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, getProducts, category } = useContext(ProductContext);
  const [displayProducts, setDisplayProducts] = useState([]);

  // Cargar productos al montar
  useEffect(() => {
    getProducts();
  }, []);

  // Filtrar productos cada vez que cambien products o category
  useEffect(() => {
    if (!products) return; // esperar que lleguen los productos

    if (category) {
      const filtered = products.filter((p) => p.category === category);
      setDisplayProducts(filtered);
    } else {
      setDisplayProducts(products);
    }
  }, [products, category]);

  if (!products || products.length === 0) {
    return <p className="text-center py-16">Cargando productos...</p>;
  }

  return (
    <section className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {displayProducts.length === 0 ? (
        <p>No hay productos disponibles</p>
      ) : (
        displayProducts.map((product) => (
          <div
            key={product._id}
            className="border border-slate-200 shadow-sm rounded-lg overflow-hidden"
          >
            <div className="bg-gray-200">
              <Link to={`/productos/${product.slug}`} state={{ product }}>
                <img
                  src={product.img}
                  alt={product.description}
                  className="w-full h-96 object-center object-cover"
                />
              </Link>
            </div>
            <div className="flex-1 p-4 space-y-2 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
              <p className="text-gray-500 pb-8">{product.description}</p>
              <Link
                to={`/productos/${product.slug}`}
                state={{ product }}
                className="btn-product"
              >
                <button type="button" className="w-full">
                  Descripción
                </button>
              </Link>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default ProductList;
