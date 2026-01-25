import ProductContext from "./ProductContext"
import { useReducer } from "react"
import ProductReducer from "./ProductReducer"
import axiosClient from "../../config/axios";


const ProductState = (props) => {
    const initialState = {
        products: [],
        currentProduct: {
            _id: null,
            idProd: '',
            name: '',
            slug: '',
            description: '',
            price: 0,
            stock: 0,
            category: '',
            img: '',
        }
    }

    const [globalState, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = async () => {
        try {
            const response = await axiosClient.get('/products/readall');
            console.log('endpoint obtener productos', response);

            dispatch({
                type: 'OBTENER_PRODUCTOS',
                payload: response.data.datos
            });

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ProductContext.Provider
            value={{
                products: globalState.products,
                currentProduct: globalState.currentProduct,
                getProducts
            }}
        >
            {props.children}

        </ProductContext.Provider>
    )
}

export default ProductState;