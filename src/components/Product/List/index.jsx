import { useContext, useEffect } from "react";
import ProductContext from "../../../contexts/Product/ProductContext";
import { Link } from "react-router-dom";

const ProductList = () => {
  const ctx = useContext(ProductContext);
  const { products, categories, selectedCategory, getProducts, setCategory } = ctx;

  useEffect(() => {
    getProducts();
  }, [selectedCategory]);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.categories === selectedCategory)
    : products;

  return (
    <div>
      {/* Filtro de categorías */}
      <section className="max-w-7xl mx-auto py-4 px-8">
        <label htmlFor="category" className="font-bold text-gray-900">Filtrar por categoría</label>
        <select
          id="category"
          value={selectedCategory || ""}
          onChange={(e) => setCategory(e.target.value)} // Cambia la categoría seleccionada
          className="mt-2 p-2 border rounded-md"
        >
          <option value="">Todas las categorías</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </section>

      {/* Listado de productos filtrados */}
      <section className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 gap-y-4 gap-x-12 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-2 flex-column">
        {filteredProducts.length === 0 ? (
          <p>No hay productos disponibles</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product._id} className="border border-slate-200 shadow-sm rounded-lg overflow-hidden">
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
                <Link to={`/productos/${product.slug}`} state={{ product }} className="btn-product">
                  <button type="button" className="w-full">Descripción</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </section>
    </div>        
  )
}

export default ProductList;