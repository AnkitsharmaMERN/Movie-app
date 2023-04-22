//This is for only register users 
import { Get_login_Request, Get_login_Success, Get_login_fail } from "./constant";
import { Get_signup_request, Get_signup_success, Get_signup_fail } from "./constant";
import { load_user_Request, load_user_Success, load_user_Fail } from "./constant"
import { Add_Favorite_Movie_Request, Add_Favorite_Movie_Success, Add_Favorite_Movie_Fail } from './constant'

//this is for admin users 
import { Get_Admin_users_Request, Get_Admin_users_Success, Get_Admin_users_Fali } from "./constant";



//this is for only users 
// export const Registration = (state = {}, action) => {
//     switch (action.type) {
//         case Get_signup_request:
//         return {
//             loading: true,

//         }
//         case Get_signup_success:
//             return {
//                 loading: false,
//                 user: action.paylod
//             }
//             case Get_signup_fail:
//                 return {
//                     loading: false,
//                     error: action.paylod
//                 }
//                 default:
//                     return state;
//                 }
//             }

// NOTE:- here i let the in the state user is empity because at the request time of state must be empity because i call the data during action and then store the new value in store.js   
export const loginReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case Get_signup_request:
        case Get_login_Request:
        case load_user_Request:
            return {
                loading: true,
                ...state
            }
        case Get_signup_success:
        case Get_login_Success:
        case load_user_Success:
            return {
                loading: false,
                user: action.payload
            }
        case Get_signup_fail:
        case Get_login_fail:
        case load_user_Fail:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}



// export const getuserdetails = (state = { user: {} }, action) => {
//     switch (action.type) {
//         case load_user_Request:
//             return {
//                 loading: true,
//                 ...state
//             }
//         case load_user_Success:
//             return {
//                 loading: false,
//                 user: action.payload
//             }
//         case load_user_Fail:
//             return {
//                 loading: false,
//                 error: action.payload
//             }

//         default:
//             return state;
//     }

// }


export const Getusersreducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case Get_Admin_users_Request:
            return {
                loading: true,

            }
        case Get_Admin_users_Success:
            return {
                loading: false,
                users: action.payload
            }
        case Get_Admin_users_Fali:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;

    }
}



export const AddFavoriteMovieReducer = (state = { favproduct: {} }, action) => {
    switch (action.type) {
        case Add_Favorite_Movie_Request:
            return {
                loading: true,
                ...state
            }

        case Add_Favorite_Movie_Success:
            return {
                loading: false,
                favproduct: action.payload
            }
        case Add_Favorite_Movie_Fail:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }

}
