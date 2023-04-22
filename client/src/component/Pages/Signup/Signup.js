import React, { useEffect } from 'react'
import "./Signup.css"
import "../Login/Login"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { registration } from "../../../react-redux/userAction"
import { useState } from 'react';




function Signup() {
    const Navigate = useNavigate();
    const dispatch = useDispatch()
    const userdetails = useSelector(state => state.login)
    const { loading, user, error } = userdetails


    const [User, SetUser] = useState({
        First_Name: "", Last_Name: "", Email: "", Password: "", Confirm_Password: ""
    });
    const [File, SetFile] = useState()


    useEffect(() => {
        if (user) {
            console.log(user)
            Navigate('/')
        }
        //   else{
        // Navigate('/login')
        //   }

    }, [user, error, Navigate])






    const handelchange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        SetUser({ ...User, [name]: value });
        // console.log(User)
    }
    //This function for profile pic for file 
    const FileChange = (event) => {
        // const name = event.target.name
        // console.log(name)
        console.log(event.target.files[0])
        SetFile(event.target.files[0])
        console.log(File)
    }

    const userdatapost = async (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('First_Name', User.First_Name)
        formData.append('Last_Name', User.Last_Name)
        formData.append('Email', User.Email)
        formData.append('Password', User.Password)
        formData.append('File', File)
        console.log(...formData)

        // try {
        //     const res = await axios.post("http://localhost:27017/api/User/signup", User)
        //     

        // } catch (error) {
        //     alert(error.response);
        // }
        dispatch(registration(formData))
        // SetUser({
        //      First_Name: "", Last_Name: "", Email: "", Password: "", Confirm_Password: "" })

    }







    return (
        <>
            {loading ? (<h1>loading...</h1>) : (<>
                <div className='container'>
                    <div className='row signupmaincontainer'>
                        <div className='col signupleftcol'>
                        <h2 className='signupheading'>Registration Form</h2>
                            <div className='form-group'>
                                {/* <label className='col-md-4'></label> */}
                                <input name="First_Name" placeholder="First Name" className='signupinput' value={User.First_Name} onChange={handelchange} type="text" />
                                
                            </div>
                            <div className='form-group'>
                                <label className='col-md-4'></label>
                                <input name='Last_Name' placeholder='Last Name' className='signupinput' value={User.Last_Name} onChange={handelchange} type="text" />
                            
                            </div>
                            <div className='form-group'>
                                <label className='col-md-4'></label>
                                <input name='Email' placeholder='Email' className='signupinput' value={User.Email} onChange={handelchange} type="text" />
                    
                            </div>
                            <div className='form-group'>
                                <label className='col-md-4'></label>
                                <input type="password" className='signupinput' placeholder='Password' name='Password' value={User.Password} onChange={handelchange} />
                                
                            </div>
                            <div className='form-group'>
                                <label className='col-md-4'></label>
                                <input type="password" className='signupinput' placeholder='Confirm Password' name='Confirm_Password' value={User.Confirm_Password} onChange={handelchange} />
                            </div>
                            <div className='form-group'>
                                <label className='col-md-4'></label>
                                <input type="file" className='form-control fileinput' name='Profile_pic' onChange={FileChange} />
                            </div>
                            <button type="button" className="btn btn-success my-2 signupbutton" onClick={userdatapost}> signup  </button>
                            <Link to="/login"><button type="button" className='btn btn-success my-2 signupbutton'>Login</button></Link>
                            
                        </div>
                        <div className='col '>
                            <img style={{ height: "100%", width: "100%" }} src='./pictures/20824342_6343845.jpg' alt='pic' />
                        </div>
                    </div>
                </div>
            </>)}
        </>
    )
}

export default Signup