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
        authState: false
    };

    const [globalState, dispatch] = useReducer(UserReducer, initialState);

    const registerUser = async (form) => {
        try {
            const response = await axiosClient.post(('/Users/register'), form);
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
            const res = await axiosClient.post(('/Users/login'), form);
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

    const logout = async () => {
        dispatch({
            type: 'LOGOUT_USUARIO'
        });
    }
    return (
        <UsersContext.Provider
            value={{
                user: initialState.currentUser,
                registerUser,
                loginUser,
                logout
            }}                
        >
            {props.children}
        </UsersContext.Provider>
    )
}
export default UserState;


    