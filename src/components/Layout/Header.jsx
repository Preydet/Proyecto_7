import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

import UserContext from "../../contexts/Users/UsersContext";
import ProductContext from "../../contexts/Product/ProductContext";

export default function Header() {
  const {
    currentUser,
    cart,
    authStatus,
    verifyUser,
    logout,
    getCart,
    setLoading,
  } = useContext(UserContext);

  const { categories, setCategory, getProducts, products } = useContext(ProductContext);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    verifyUser();
    getCart();
    setLoading(false);
  }, [authStatus, currentUser]);

  useEffect(() => {
    getCart();
  }, [currentUser]);

  useEffect(() => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotal(totalItems);
  }, [cart]);

  const handleSearch = (query) => {
    setCategory("");
    getProducts(query);
    navigate("/productos")
  };
  
  return (
    <header className="bg-slate-900">
  <nav className="flex justify-between items-center mx-8 py-4">
    {/* Logo */}
    <ul className="flex items-center">
      <li className="ml-2">
        <Link to="/">
          <Logo />
        </Link>
      </li>
    </ul>

    {/* Barra de búsqueda */}
    <section className="flex items-center justify-center w-full sm:w-2/3 md:w-1/2 mx-auto mb-4 sm:mb-0">
      <SearchBar 
          onSearch={handleSearch}
          products={products}      
      />
    </section>

    {/* Sección de botones (Perfil, Carrito, Iniciar sesión, Crear cuenta) */}
    <section className="flex items-center justify-end w-full sm:w-auto">
      {authStatus ? (
        <>
          <Link to="/perfil" className="btn-nav ml-4">
            Perfil
          </Link>

          <Link to="/" className="btn-nav ml-4" onClick={logout}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </Link>
        </>
      ) : (
        <>
          <Link to="/registro" className="btn-nav ml-4">
            Crear cuenta
          </Link>
          <Link to="/iniciar-sesion" className="btn-nav ml-4">
            Iniciar sesión
          </Link>
        </>
      )}

      {/* Carrito */}
      <Link to="/carrito" className="btn-cart ml-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
        <span className="btn-cart-quantity">{total}</span>
      </Link>
    </section>
  </nav>

  {/* Botones de categorías debajo de la barra de búsqueda */}
  <section className="flex items-center justify-center space-x-4 sm:space-x-6 flex-wrap mb-4 sm:mb-0">
    {categories && categories.length > 0 ? (
      categories.map((category, index) => (
        <button
          key={index}
          className="text-lg text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
          onClick={() => {
            setCategory(category);
            navigate("/productos");
          }}
        >
          {category}
        </button>
          ))        
    ) : (
      <p className="text-white">No hay categorías disponibles</p>
    )}
  </section>
</header>

  );
}
