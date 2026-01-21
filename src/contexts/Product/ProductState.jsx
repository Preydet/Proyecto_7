import ProductContext from "./ProductContext"
import { useReducer } from "react"
import ProductReducer from "./ProductReducer"
import axiosClient from "../../config/axios";


const ProductState = (props) => {
    const initialState = {
        products: []
    }

    const [globalState, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = async () => {
        try {
            const response = await axiosClient.get('/products/readall');
            console.log(response);

            dispatch({
                type: 'OBTENER_PRODUCTOS',
                payload: response.data.products
            });

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ProductContext.Provider
            value={{
                products: globalState.products,
                getProducts
            }}
        >
            {props.children}

        </ProductContext.Provider>
    )
}

export default ProductState;