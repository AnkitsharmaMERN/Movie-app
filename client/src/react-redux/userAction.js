import axios from "axios"

// import cookies from "js-cookie"
import { Get_login_Request, Get_login_Success, Get_login_fail } from "./constant"
import { Get_signup_request, Get_signup_success, Get_signup_fail } from "./constant"
import { load_user_Request, load_user_Success, load_user_Fail } from "./constant"

//this is for admin users 
import { Get_Admin_users_Request, Get_Admin_users_Success, Get_Admin_users_Fali } from "./constant"
import { Add_Favorite_Movie_Request, Add_Favorite_Movie_Success, Add_Favorite_Movie_Fail } from "./constant"

//this all for only users 
export const registration = (formData) => async (dispatch) => {
    try {
        console.log(...formData)
        // console.log(formData)
        dispatch({ type: Get_signup_request })
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.post('http://localhost:27017/api/User/signup', formData,{ withCredentials: true }, config);
        console.log(data)
        // console.log(data.token)
        dispatch({
            type: Get_signup_success,
            payload: data
        })
        console.log(data.token)
        // cookies.set('jwttoken',data.token)
        console.log(data)
    } catch (error) {
        dispatch({
            type: Get_signup_fail,
            payload: error.response
        })
    }

}


export const loginAction = (Email, Password) => async (dispatch) => {
    try {
        // console.log(Email)
        dispatch({ type: Get_login_Request })
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.post('http://localhost:27017/api/User/login', { Email, Password }, { withCredentials: true }, config);
        console.log(data)
        dispatch({
            type: Get_login_Success,
            payload: data
        })
        // cookies.set('jwttoken',data.token)
    } catch (error) {
        dispatch({
            type: Get_login_fail,
            payload: error.response
        })
    }
}

export const getuserdetails = () => async (dispatch) => {
    try {
        dispatch({ type: load_user_Request })
        const config = { headers: { 'Content-Type': 'application/json' } }
        const data = await axios.get('http://localhost:27017/api/User/profile', { withCredentials: true }, config)
        console.log(data)
        dispatch({
            type: load_user_Success,
            payload: data
        })

    } catch (error) {
        // console.log(error.msg)
        dispatch({
            type: load_user_Fail,
            payload: error.response
        })

    }
}

//this for admin 
export const GetallUsers = () => async (dispatch) => {
    try {
        dispatch({ type: Get_Admin_users_Request })
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.get("http://localhost:27017/api/User/admin", { withCredentials: true }, config)
        console.log(data)
        dispatch({
            type: Get_Admin_users_Success,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: Get_Admin_users_Fali,
            payload: error
        })

    }

}



//this is for add favorites product by user 
export const AddFavoriteMovie = (id, msg) => async (dispatch) => {
    try {
        console.log(id)
        dispatch({ type: Add_Favorite_Movie_Request })
        const { data } = await axios.post(`http://localhost:27017/api/User/Favorite/${id}`, msg, { withCredentials: true })
        console.log(data)
        dispatch({
            type: Add_Favorite_Movie_Success,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: Add_Favorite_Movie_Fail,
            payload: error
        })

    }

}
