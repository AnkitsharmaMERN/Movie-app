import {
    Get_Product_Request, Get_Product_Success, Get_Product_Fail,
    Get_Product_Details_Request, Get_Product_Details_Success, Get_Product_Details_Fail,
    Get_search_Request, Get_search_Success, Get_search_Fail, 
} from "./constant";


// this constant for admin 
import {
    Get_Admin_Product_Request, Get_Admin_Product_Success, Get_Admin_Product_Fail,
    Get_Admin_Product_Remove_Request, Get_Admin_Product_Remove_Success, Get_Admin_Product_Remove_Fail,
    Get_Admin_Product_Update_Request, Get_Admin_Product_Update_Success, Get_Admin_Product_Update_Fail
} from '../react-redux/constant'


// all Product reducer 
export const productReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case Get_Product_Request:
            return {
                loading: true,

            };
        case Get_search_Request:
            return {
                loading: true,
                product: []
            };
        case Get_Product_Success:
        case Get_search_Success:
            return {
                loading: false,
                product: action.payload
            };
        case Get_Product_Fail:
        case Get_search_Fail:
            return {
                loading: false,
                error: action.payload
            }
        // case Clear_error:
        //     return {
        //         ...state,
        //         error: null
        //     }
        default:
            return state;
    }
}

// single product details reducer 

export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case Get_Product_Details_Request:
            return {
                loading: true,
                ...state
            };
        case Get_Product_Details_Success:
            return {
                loading: false,
                product: action.payload
            }
        case Get_Product_Details_Fail:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }

}



// admin get all product reducer  

export const AdminproductReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case Get_Admin_Product_Request:
            return {
                loading: true,
                ...state
            };
        // case Get_Admin_search_Request:
        // return {
        //     loading: true,
        //     product: []
        // };
        case Get_Admin_Product_Success:
            // case Get_Admin_search_Success:
            return {
                loading: false,
                product: action.payload
            };
        case Get_Admin_Product_Fail:
            // case Get_Admin_search_Fail:
            return {
                loading: false,
                error: action.payload
            }
        // case Clear_error:
        //     return {
        //         ...state,
        //         error: null
        //     }
        default:
            return state;
    }

}

// admin product updation reducer
export const AdminProductUpdateReducer = (state = { updateproduct: {} }, action) => {
    switch (action.type) {
        case Get_Admin_Product_Update_Request:
            return {
                loading: true,
                ...state
            };
        case Get_Admin_Product_Update_Success:
            return {
                loading: false,
                updateproduct: action.payload
            }
        case Get_Admin_Product_Update_Fail:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }

}

// admin remove product reducer 
export const AdminProductRemoveReducer = (state = { removeproduct: {} }, action) => {
    switch (action.type) {
        case Get_Admin_Product_Remove_Request:
            return {
                loading: true,
                ...state
            };
        case Get_Admin_Product_Remove_Success:
            return {
                loading: false,
                removeproduct: action.payload
            }
        case Get_Admin_Product_Remove_Fail:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }

}