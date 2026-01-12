import ProductContext from "./ProductContext"

const ProductState = (props) => {
    const initialState = {
        products: [
            {
                id: 0,
                name: "Producto de Prueba",
                price: 100,
                description: "Este es un producto de prueba"
            }
        ]
    }
    return (
        <ProductContext.Provider
            value={{
                products: initialState.products
            }}
        >
            {props.children}

        </ProductContext.Provider>
    )
}

export default ProductState;