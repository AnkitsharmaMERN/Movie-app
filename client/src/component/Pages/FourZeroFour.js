import React from 'react'
import { Link } from 'react-router-dom'


function FourZeroFour() {
  return (
    <>
    <div className="container">
        <img src="./pictures/44-incredible-404-error-pages@3x-1560x760.png" alt="pic" style={{height:"40rem",width:"80rem"}}/>
        
        <h1>This page is not found </h1> 
        
        
        <h1> Pls login to access the content of this website </h1>

        <Link to='/login'><button  type= "button"className='btn btn-success my-2'>Login</button></Link>

        <h1> If you are not registered in this website then signup</h1>

        <Link to='/signup'><button type="button"className='btn btn-success my-2'>Signup</button></Link>
    </div>
    </>
  )
}

export default FourZeroFour