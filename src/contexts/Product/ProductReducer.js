const ProductReducer = (globalState, action) => {
    switch (action.type) {  
        case 'OBTENER_PRODUCTOS':
            return {
                ...globalState,
                products: action.payload
            }              
                
        case 'OBTENER_PRODUCTO':
            return {
                ...globalState,
                currentProduct: action.payload
            }
        
        case 'OBTENER_CATEGORIAS':
            return {
                ...globalState,
                categories: action.payload
            }
        
        case 'CAMBIAR_CATEGORIA':
            return {
                ...globalState,
                selectedCategory: action.payload
            }
            
        default:
            return globalState;
        }
}


export default ProductReducer;