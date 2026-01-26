const UserReducer = (globalState, action) => {
    switch (action.type) {
        case "REGISTRO_EXITOSO":
            return {
                ...globalState,
                mensaje: "Usuario creado correctamente"
            }
        case "LOGIN_EXITOSO":
            localStorage.setItem("token", action.payload);
            return {
                ...globalState,
                authStatus: true
            }
        case "OBTENER_USUARIO":
            return {
                ...globalState,
                authStatus: true,
                currentUser: action.payload
            }
        case "CERRAR_SESION":
            localStorage.removeItem('token');
            return {
                ...globalState,
                currentUser: null,
                authStatus: false,
                loanding: false
            }
        default:
            return globalState;
    }
}

export default UserReducer;