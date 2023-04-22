import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UpdatePassword() {
   
    // const code = useParams();
    // console.log(code)
    const Navigate=useNavigate()


    const [User, setUser] = useState({
        otp:'', Password: '', Confirm_Password:''
    })


    const handelchange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUser({ ...User, [name]: value })
    }

    const submitdata = async (e) => {
        e.preventDefault()
        if (User.otp) {
            if (User.Password === User.Confirm_Password) {
                const config = { headers: { 'Content-Type': 'application/json' } }
                const updatedata = await axios.post('http://localhost:27017/api/User/reset-password', User, { withCredentials: true }, config)
                if (updatedata.status === 200) {
                    alert("your password is successfully updated")
                    Navigate("/login")
                }else{
                    alert("your otp is invalid")
                    setUser({
                        otp:'', Password: '', Confirm_Password:''
                    })
                }
            } else {
                alert("Password and Confirm_Password do not match")
            }
            
        }
        else {
            alert("please enter your unique code for reset password")
        }

    }





    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='heading'><h1>update password</h1></div>
                    <div className='col'>
                        <div className='form-group'>
                            <label className='col-md-4'>code </label>
                            <input name="otp" placeholder="Enter here your unique code " className='form-control' value={User.otp} onChange={handelchange} type="text" />
                            <br />
                        </div>
                        <div className='form-group'>
                            <label className='col-md-4'>Password </label>
                            <input name="Password" placeholder="Password" className='form-control' value={User.Password} onChange={handelchange} type="text" />
                            <br />
                        </div>
                        <div className='form-group'>
                            <label className='col-md-4'>Confirm_Password </label>
                            <input name='Confirm_Password' placeholder='Confirm_Password' className='form-control' value={User.Confirm_Password} onChange={handelchange} type="text" />
                            <br />
                        </div>
                    </div>
                    <div>
                        <button type='button' className='btn btn-success my-3' onClick={submitdata}>Update password</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UpdatePassword