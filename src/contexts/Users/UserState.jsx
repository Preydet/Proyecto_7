import { useReducer } from "react";
import axiosClient from "../../config/axios";
import UserReducer from "./UsersReducer";
import UsersContext from "./UsersContext";

const UserState = (props) => {
    const initialState = {
        currentUser: {
            username: "",
            email: "",
            country: "",
            zipCode: 0,
            role: ""
        },
        cart: [],
        authStatus: false,
        sessionURL: null,
        globalLoading: false
    };

    const [globalState, dispatch] = useReducer(UserReducer, initialState);

    const registerUser = async (form) => {
        try {
            const response = await axiosClient.post(('/users/register'), form);
            console.log('respuesta del registro', response);

            dispatch({
                type: 'REGISTRO_EXITOSO',
                payload: response.data
            });
            return;
        } catch (error) {
            console.log( error);
            return error.response.data.message;
        }
    }

    const loginUser = async (form) => {
        try {
            const res = await axiosClient.post(('/users/login'), form);
            console.log('respuesta del login', res.data.token);
            const token = res.data.token;
            
            dispatch({
                type: 'LOGIN_EXITOSO',
                payload: token
            });
            return;
        } catch (error) {
            console.error(error);
            return error.response.data.msg || error.response.data.message;
        }
    }

    const verifyUser = async () => {
        const token = localStorage.getItem('token');
        if (token){
            axiosClient.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + token;
         } else{
            delete axiosClient.defaults.headers.common['Authorization'];
            }
        try {
            const res = await axiosClient.get('/users/verify-user');
            dispatch({
                type: 'OBTENER_USUARIO',
                payload: res.data.user
            })
        } catch (error) {
            console.error(error);
            return;
        }
    }

        const updateUser = async (id, form) => {
            const token = localStorage.getItem('token');
            if (token){
            axiosClient.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + token;
            } else{
            delete axiosClient.defaults.headers.common['Authorization'];
            }
        await axiosClient.put(`/users/${id}`, form);
    }

    const logout = async () => {
        dispatch({
            type: 'CERRAR_SESION'
        });
    }

    const setLoading = (status) => {
        dispatch({
            type: 'CHANGE_STATUS_LOADING',
            payload: status
        });
    }

    const getCheckoutSession = async () => {
        const token = localStorage.getItem('token');
            if (token){
            axiosClient.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + token;
            } else{
            delete axiosClient.defaults.headers.common['Authorization'];
            }
        try {
            const response = await axiosClient.get('/carts/create-checkout-session');

            dispatch({
                type: 'GET_CHECKOUT_SESSION',
                payload: response.data.session_url
            });
        }catch (error) {
            console.error(error);
            return;
        }
    }

    const getCart = async () => {
        const token = localStorage.getItem('token');
        if (token){
            axiosClient.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + token;
         } else{
            delete axiosClient.defaults.headers.common['Authorization'];
            }
        try {
            const response = await axiosClient.get('/carts/get-cart');
            console.log('respuesta del carrito', response);

            dispatch({
                type: 'GET_CART',
                payload: response.data.cart.products
            });
        }catch (error) {
            console.error(error);
            return;
        }
    }

    const editCart = async (data) => {
        const token = localStorage.getItem('token');
        if (token){
            axiosClient.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + token;
         } else{
            delete axiosClient.defaults.headers.common['Authorization'];
            }
        try {
            const response = await axiosClient.put('/carts/edit-cart', { products: data });
            await getCart();
            return response.data.msg;
        }catch (error) {
                return;
        }
    }

    return (
        <UsersContext.Provider
            value={{
                currentUser: globalState.currentUser,
                cart: globalState.cart,
                authStatus: globalState.authStatus,
                sessionURL: globalState.sessionURL,
                globalLoading: globalState.globalLoading,
                registerUser,
                loginUser,
                logout,
                verifyUser,
                updateUser,
                setLoading,
                getCheckoutSession,
                getCart,
                editCart
            }}                
        >
            {props.children}
        </UsersContext.Provider>
    )
}

export default UserState;


    