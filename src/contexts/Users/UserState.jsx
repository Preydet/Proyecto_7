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
            return error.response.data.message;
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
            const res = await axiosClient.get('/users/verify');
            dispatch({
                type: 'OBTENER_USUARIO',
                payload: res.data.user
            })
        } catch (error) {
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
                updateUser
            }}                
        >
            {props.children}
        </UsersContext.Provider>
    )
}


export default UserState;


    