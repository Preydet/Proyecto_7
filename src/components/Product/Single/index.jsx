import { useLocation } from "react-router-dom"

const SingleProduct = () => {
    const location = useLocation();
    const { product } = location?.state;

    return (
        <main className="max-w-7xl mx-auto pt-16 pb-24 px-8 lg:grid lg:grid-cols-2 lg:gap-x-16">
            <section>
                <h1 className="text-4xl font-bold">{product.name}</h1>
                <div className="mt-4">
                    <p className="text-gray-500">{product.description}</p>
                </div>
                <div className="mt-4">
                    <h1 className="text-3xl">
                        {new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(product.price)}
                    </h1>
                </div>
            </section>
            <figure className="mt-8 col-start-2 row-span-2">
                <img
                    src={product.img}
                    alt={product.description}
                    className="w-full object-center object-cover"
                />
            </figure>
        </main>
    )
}

export default SingleProduct;