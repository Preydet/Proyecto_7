import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">        
        
        <div>
          <h3 className="text-xl font-bold mb-4">PC & Tech</h3>
          <p className="text-gray-400">
            Tu tienda de tecnología de confianza. 
            <br />
            Componentes, periféricos y accesorios de la mejor calidad.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Contacto</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Dirección: 456 Calle Tech, Ciudad Ejemplo, País</li>
            <li>Teléfono: +1 555 987 6543</li>
            <li>Email: info@pcandtech.com</li>
            <li>Soporte: soporte@pcandtech.com</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Horario de Atención</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Lunes - Viernes: 9:00 AM - 8:00 PM</li>
            <li>Sábado: 10:00 AM - 5:00 PM</li>
            <li>Domingo: Cerrado</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        © 2026 PC & Tech. Todos los derechos reservados.
      </div>
    </footer>
  );
}
