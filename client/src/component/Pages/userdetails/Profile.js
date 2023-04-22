import React from 'react'
import './Profile.css'
import { useEffect } from 'react'
import { getuserdetails } from '../../../react-redux/userAction'
import { useDispatch,useSelector } from "react-redux"
import FourZeroFour from '../FourZeroFour'

function Profile() {
    const dispatch = useDispatch()
    

useEffect(()=>{

dispatch(getuserdetails())

},[dispatch])


const userdetails = useSelector(state => state.profile)
    const { loading, user, error } = userdetails
    console.log(user)
    // console.log(user.user)
    // console.log(error)
    console.log(user.data.user.First_Name)
   

    return (
        <>
            {loading ? (<h1>loading...</h1>) : error ? (<h1>{<FourZeroFour/>}</h1>) :
                (<>
                    <div className='container'>
                        <div><h1>user profile </h1></div>
                        <div className='row'>
                            <div className='container profile'>
                                <div className='col'>
                                    <h1>Profile Image</h1>
                                    {/* <img alt='pic' loading='lazy' src='' >user Image </img> */}
                                </div>

                                <div className='col'>
                                    <div className='user-body'>
                                    <h1 className='user-title'> User Details </h1>
                                    <p className='user-text'>{user.data.user.First_Name}</p>
                                    <p className='user-text'>{user.data.user.Last_Name}</p>
                                    <p className='user-text'>{user.data.user.Email}</p>


                                    </div>
                                    <h2><p>Hi {user.data.user.First_Name}</p></h2>
                                    {/* <h2><p>{user.user.Last_Name}</p></h2>
                                    <h2><p>{user.user.Email}</p></h2> */}
                                </div>
                            </div>

                        </div>

                    </div>

                </>)
            }
        </>
    )
}

export default Profile