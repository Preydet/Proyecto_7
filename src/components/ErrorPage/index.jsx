import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center border border-gray-200">
        
          <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100">
            <span className="text-4xl text-red-600">&#10060;</span>
          </div>
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          ¡Pago rechazado!
        </h1>
        <p className="text-gray-600 mb-8">
          Hubo un problema al procesar tu pago. Por favor, intenta nuevamente.
        </p>
        
        <button
          onClick={() => navigate("/carrito")}
          className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg"
        >
          Volver al carrito
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
