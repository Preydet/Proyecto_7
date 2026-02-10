import ProductContext from "./ProductContext"
import { useReducer, useEffect } from "react"
import ProductReducer from "./ProductReducer"
import axiosClient from "../../config/axios";


const ProductState = (props) => {
    const initialState = {
        products: [],
        categories: [],
        selectedCategory: '',
        currentProduct: {
            _id: null,
            idProd: '',
            name: '',
            slug: '',
            description: '',
            price: 0,            
            img: '',
        }
    }

    const [globalState, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = async (category = "") => {
        try {
            const response = await axiosClient.get(`/products?category=${category}`);
            console.log('endpoint obtener productos', response);

            dispatch({
                type: 'OBTENER_PRODUCTOS',
                payload: response.data.products
            });

        } catch (error) {
            console.error(error);
        }
    }

    const getcategories = async () => {
        try {
            const response = await axiosClient.get(`/products/categories`);
            console.log('Respuesta de la API para categorias:', response);
            if (response.data && Array.isArray(response.data.categories) && response.data.categories.length > 0 )
            dispatch({
                type: 'OBTENER_CATEGORIAS',
                payload: response.data.categories
            });
        } catch (error) {
            console.error('Error al obtener categorías', error);
        }
    };

    const setCategory = (category) => {
        dispatch({
            type: 'CAMBIAR_CATEGORIA',
            payload: category
        });
        getProducts(category);
    };

    const setCurrentProduct = (productData) => {
        dispatch({
            type: "OBTENER_PRODUCTO",
            payload: productData
        });
    };

    useEffect(() => {
        getcategories();
        getProducts();
    }, []);

    return (
        <ProductContext.Provider
            value={{
                products: globalState.products,
                categories: globalState.categories,
                selectedCategory: globalState.selectedCategory,
                currentProduct: globalState.currentProduct,
                getProducts,
                setCategory,
                setCurrentProduct
            }}
        >
            {props.children}

        </ProductContext.Provider>
    )
}

export default ProductState;