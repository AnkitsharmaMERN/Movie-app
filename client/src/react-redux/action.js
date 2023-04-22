import {
    Get_Product_Request, Get_Product_Success, Get_Product_Fail,
    Get_Product_Details_Request, Get_Product_Details_Success, Get_Product_Details_Fail,
    Get_search_Request, Get_search_Success, Get_search_Fail
} from "../react-redux/constant"
// this constant for admin 
import {
    Get_Admin_Product_Request, Get_Admin_Product_Success, Get_Admin_Product_Fail,
    Get_Admin_Product_Remove_Request, Get_Admin_Product_Remove_Success, Get_Admin_Product_Remove_Fail,
    Get_Admin_Product_Update_Request, Get_Admin_Product_Update_Success, Get_Admin_Product_Update_Fail
} from '../react-redux/constant'
import axios from "axios"
// import { useParams } from "react-router-dom";

// Here we need to make function in function because i need to make dispatch function they use async function.
export const productAction = (page, size = 5) => async (dispatch) => {
    try {
        console.log(page, size)
        dispatch({ type: Get_Product_Request })
        const { data } = await axios.get(`http://localhost:27017/api/Movie/?page=${page}&size=${size}`, { withCredentials: true });
        dispatch({
            type: Get_Product_Success,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: Get_Product_Fail,
            payload: error.response
        });
    };
};

export const searchProduct = (key) => async (dispatch) => {

    console.log(key)
    try {
        dispatch({ type: Get_search_Request })
        console.log(key)
        const config = { headers: { 'Content-Type': 'application/json' } }
        const { data } = await axios.get(`http://localhost:27017/api/Movie/search?key=${key}`, { withCredentials: true }, config)
        dispatch({
            type: Get_search_Success,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: Get_search_Fail,
            payload: error.response
        })

    }

}

export const productDetailsAction = (id) => async (dispatch) => {
    try {
        console.log(id)
        dispatch({ type: Get_Product_Details_Request })
        const { data } = await axios.get(`http://localhost:27017/api/Movie/${id}`, { withCredentials: true })
        dispatch({
            type: Get_Product_Details_Success,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: Get_Product_Details_Fail,
            payload: error.response
        })
    }
}





// This section for admin product 

export const AdminProducts = () => async (dispatch) => {
    try {

        dispatch({ type: Get_Admin_Product_Request })
        const { data } = await axios.get('http://localhost:27017/api/Movie/admin', { withCredentials: true });
        dispatch({
            type: Get_Admin_Product_Success,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: Get_Admin_Product_Fail,
            payload: error.response
        });
    };
};

export const AdminProductRemove = (id) => async (dispatch) => {
    try {
        // console.log(id)
        dispatch({ type: Get_Admin_Product_Remove_Request })
        const { data } = await axios.delete(`http://localhost:27017/api/Movie/admin/${id}`, { withCredentials: true })
        dispatch({
            type: Get_Admin_Product_Remove_Success,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: Get_Admin_Product_Remove_Fail,
            payload: error.response
        })
    }
}

export const AdminProductupdate = (id, formData) => async (dispatch) => {
    try {
        dispatch({ type: Get_Admin_Product_Update_Request })
        console.log(id)
        console.log(...formData)
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }
        const { data } = await axios.put(`http://localhost:27017/api/Movie/admin/${id}`, formData, { withCredentials: true },config)
        console.log(data)
        dispatch({
            type: Get_Admin_Product_Update_Success,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: Get_Admin_Product_Update_Fail,
            payload: error.responses
        })
    }
}


