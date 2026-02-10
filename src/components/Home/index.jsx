import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import slides from "../../data/slides";

const Home = () => {
    return (
        <>
        <section className="bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    <div className="text-center">
                        <h1 className="text-5xl font-extrabold text-gray-900">
                            PC & Tech
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Descubre lo último en tecnología, ofertas exclusivas y lanzamientos
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link to="/productos" className="btn-product">
                            Ver productos
                            </Link>
                            <Link to="registro" className="btn-secondary">
                            Crear Cuenta
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <div className="rounded-xl bg-gradient-to-br from-slate-900 to-gray-700 p-8 text-center">
                            <p className="text-white text-lg font-semibold">
                                ¡Tecnología al alcance de tu mano!
                            </p>
                            <p className="text-white mt-2">
                                Revisa nuestras ofertas y añade tus favoritos al carrito
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <Carousel slides={slides}/>
            </div>
        </section>
        </>
    );
};
export default Home;