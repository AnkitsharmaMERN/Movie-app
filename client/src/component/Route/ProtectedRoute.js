import React from 'react'
import { useSelector } from "react-redux"
import {Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    const userdetails = useSelector(state => state.profile)
    const { user } = userdetails
    //    const login = user.data.Role
    //    const Role = user.data.Role
    //    console.log(Role)
    console.log(user)

    if (!user) {
        return <Navigate to={'/login'}/>

    }
    // else if (Role === 'admin') {
    //     console.log("admin access")
    // } 
    // else {
    //   console.log("user value present ")
      return children
    // }


    // return (
    //     <>
    //         <div>

    //             <p>this is the Protected route page </p>
    //             {/* <Component/> */}
    //         </div>
    //     </>
    // )



}

export default ProtectedRoute