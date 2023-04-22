import React from 'react'
import { useState } from 'react';
import { searchProduct } from '../../../react-redux/action';
import { useDispatch} from 'react-redux';
import '../Search/Search.css'
// import { Link, useNavigate } from "react-router-dom"


function Search() {
    const dispatch = useDispatch();
   
    // const Navigate = useNavigate()


    const [key, setkey] = useState({

    })
    // console.log(key)

       

    // const handlechange = (e) => {
    //     const name = e.target.name
    //     const value = e.target.value
    //     setkey({ ...key, [name]: value })
    // }

    const submit = async (e) => {
        e.preventDefault()
        console.log(key)
        if (key) {
            dispatch(searchProduct(key))
            // const config = { headers: { 'Content-Type': 'application/json' } }
            // const { data } = await axios.get(`http://localhost:27017/api/Movie/search/${key}`, { withCredentials: true }, config)
        }
        // Navigate()
    }



    return (
        <>
            <div className=''>
                <form className="Searchdiv">
                    <input name="Search" type="text" className='searchinput' placeholder="SEARCH" value={key.key} onChange={(e)=>setkey(e.target.value)} />
                
                    <button className="button searchbutton" type="button" onClick={submit} >Search</button>
            
                </form>
            </div>
        </>
    )
}

export default Search