import axios from 'axios';
import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'

function CardadminUsers({ users }) {
    // console.log(users)
    const Navigate= useNavigate();
    const id = (users._id)

    const Removefunction = async (e) => {
        e.preventDefault();
        const user = await axios.delete(`http://localhost:27017/api/User/admin/${id}`)
        console.log(user)
        if (user) {
            // console.log(user)
            // console.log(user.data.First_Name)
            alert(`${user.data.First_Name} is Successfully Deleted`)
            Navigate('*')
        }
        else {
            alert("you are not authorized")
        }
        
    }
useEffect(()=>{
   
},[])











    return (
        <div className='col-md-4 card_container' key={users._id} style={{ padding: "9px 5px", width: "20rem", height: "24rem" }}>
            <div className="card" style={{ padding: "9px 5px", width: "20rem", height: "23rem" }}>
                {/* <img src={users.thumbnail_pic} className="card-img-top" style={{ width: "19rem", height: "10rem" }} alt="pic" /> */}
                <div className="card-body">
                    <h5 className="card-title">{users.First_Name}{users.Last_Name}</h5>
                    <p className="card-text">{users.Email}</p>
                    <p className="card-text">{users.isAdmin}</p>
                    <p className="card-text">{users.resetPasswordCode}</p>
                    <p className="card-text">{users.tokens._id}</p>
                    <p className="card-text">{users.tokens.token}</p>
                    <p className="card-text">{users.Password}</p>
                    <div className='btnbody'>
                        <button className='btn btn-primary card-ad' onClick={Removefunction}>RemoveUsers</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardadminUsers