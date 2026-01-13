import ProductContext from "./ProductContext"
import { useReducer } from "react"
import ProductReducer from "./ProductReducer"

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

    const [globalState, dispatch] = useReducer(ProductReducer, initialState);
    
    return (
        <ProductContext.Provider
            value={{
                products: globalState.products
            }}
        >
            {props.children}

        </ProductContext.Provider>
    )
}

export default ProductState;