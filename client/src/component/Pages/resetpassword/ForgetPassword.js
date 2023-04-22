import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ForgetPassword() {
    const [Email, setEmail] = useState({})

    const Navigate = useNavigate()

    const handlechange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setEmail({ ...Email, [name]: value })


    }

    const submit = async (e) => {
        e.preventDefault()
        if (Email) {
            // const config = { headers: { 'Content-Type': 'application/json' } }
            const sendmail = await axios.post('http://localhost:27017/api/User/forget-password', Email )
            console.log(sendmail)
            if (sendmail.status === 200) {
                alert("check your mail reset link has been sent")
                Navigate("/reset-password")
            }
            if (sendmail.status === 402) {
                alert("This mail is not exist")
            }
            // Navigate("/code")
        } else {
            alert("please enter your username/ email id")
        }
    }

    return (
        <>
            <div className='container'>
                <h1 className='heading'>Forget Password</h1>
                <div className='row'>
                    <div className='col'>
                        <div className='form-group'>
                            <label className='col-md-4'>Email</label>
                            <input className='form-control' name='Email' value={Email.Email} onChange={handlechange} placeholder='Enter your email' type="text" />
                        </div>
                    </div>
                </div>
                <div>
                    <button type='button' className='btn btn-success my-3' onClick={submit}> Send email</button>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword