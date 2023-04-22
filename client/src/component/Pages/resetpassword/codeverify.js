import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Codeverify() {
    const Navigate = useNavigate()
    const [Token, setToken] = useState({})




    const handelchange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setToken({ ...Token, [name]: value})
    }


    const submitdata = async (e) => {
        e.preventDefault()
        console.log(Token)
        if (Token) {
            // const config = { headers: { 'Content-Type': 'application/json' } }
            console.log(Token)
            const updatedata = await axios.post('http://localhost:27017/api/User/code',Token)
            console.log(updatedata)
            console.log(updatedata.status)
            console.log(updatedata.data.codedata.resetPasswordcode)
            // const code = (updatedata.data.codedata.resetPasswordcode)
            if (updatedata.status === 200) {
                // const code = 
                Navigate(`/reset-password/${updatedata.data.codedata.resetPasswordcode}`)
            }
            if (updatedata.status===400){
                alert("please code is invalid ")

            }
        } else {
            alert("please enter your unique code ")
        }
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='heading'><h1>update password</h1></div>
                    <div className='col'>
                        <div className='form-group'>
                            <label className='col-md-4'>code </label>
                            <input name="code" placeholder="Enter here your unique code " className='form-control' value={Token.Token} onChange={handelchange} type="text" />
                            <br />
                        </div>
                    </div>
                    <div>
                        <button type='button' className='btn btn-success my-3' onClick={submitdata}>verify code</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Codeverify