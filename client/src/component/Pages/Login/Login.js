import React from 'react'
import { useEffect, useState } from "react"
import { loginAction } from "../../../react-redux/userAction"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom'
import '../Login/Login.css';




function Login() {

    const Navigate = useNavigate();
    const dispatch = useDispatch();
    const userdetails = useSelector(state => state.login)
    const { loading, user, error } = userdetails

    console.log(user)
    // console.log(user.data.token)
    // console.log(user.isAdmin)
    const [loginuser, setloginuser] = useState({
        Email: "", Password: ""
    })

    // console.log(user.status);
    useEffect(() => {
        if (user) {
            // console.log(user)
            Navigate('/')
        }
        //   else{
        // Navigate('/login')
        //   }

    }, [user, error, Navigate])


    const handlechange = (e) => {

        const name = e.target.name
        const value = e.target.value
        setloginuser({ ...loginuser, [name]: value })
    }

    const Email = loginuser.Email
    const Password = loginuser.Password


    const submitdata = async (e) => {
        e.preventDefault();
        if (!Email && !Password) {
            alert("please enter valid username and Password")
        } else {
            dispatch(loginAction(Email, Password))
        }
    }


    return (
        <>{loading ? (<h1>loading...</h1>) : (<>
            <div className='container'>
                <div className='row maincontainer'>
                    <div className='col leftcol'>
                        <h1 className='heading'>User Login</h1>
                        <div className='form-group'>
                            <label className='col-md-4'></label>
                            <input className='input' name='Email' value={loginuser.Email} onChange={handlechange} placeholder='Username/Email' type="text" />
                        </div>

                        <div className='form-group'>
                            <label className='col-md-4'></label>
                            <input type="password" className='input' name='Password' value={loginuser.Password} onChange={handlechange} placeholder='PASSWORD' />
                        </div>
                        <div className='link'>
                        <Link to="/signup" ><span className='signuplink'>NEW USER?</span></Link>
                        <Link to="/forget_password"><span className='forgetlink'>FORGET PASSWORD?</span></Link>
                        </div>
                        {/* <br /> */}
                        <button type='button' className='loginbutton' onClick={submitdata}>SUBMIT</button>
                    </div>

                    <div className='col'>
                        <img className='img loginpic' src='./pictures/20824342_6343845.jpg' alt='pic' />
                    </div>
                </div>
            </div>
        </>)}
        </>
    )
}

export default Login