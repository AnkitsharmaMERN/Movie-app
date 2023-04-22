import React from 'react'
import { useEffect } from "react"
import "./Dashboard.css"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FourZeroFour from '../../Pages/FourZeroFour'

function Dashboard() {
    const auth = useSelector(state => state.login)
    const { loading, users, error } = auth
    // const history = useNavigate()

    console.log(users)
    useEffect(() => {
        // if (users.data.isAdmin === "admin"){
        //     history("/dashboard")
        // }else {
        //     alert("404 page not found")
        // }
    }, [])


    return (<>
        {/* {loading ? (<h1>loading</h1>) : error ? (<FourZeroFour />) : */}
            (<>
                <div className='container main-container'>
                    <div className='row'>

                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">ADD Movies</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                <p className="card-text">If you want to ADD and upload movie then click Here, This is the option to uploade Movie in server </p>
                                {/* <a href="#" className="card-link">Card link</a> */}
                                <Link to="/dashboard/addmovie" className="card-text">ADD Movie</Link>
                            </div>
                        </div>


                        {/* <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Update Movie</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> 
                                <p className="card-text">If you want to update movie then click Here, This is the option to update Movie in server </p>
                                <a href="#" className="card-link">Card link</a>
                                <Link to="/dashboard/editmovies/:id" className="card-link">Update Movie</Link>
                            </div>
                        </div> */}


                        {/* <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Delete Movie</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">If you want to delete movie then click Here, This is the option to delete Movie in server </p>
                                <a href="#" className="card-link">Card link</a>
                                <Link to="/dashboard/deletemovie/:id" className="card-link">Delete Movie</Link>
                            </div>
                        </div> */}


                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Get Movies</h5>
                                {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                <p className="card-text">you can see all movies uploaded Movie </p>
                                {/* <a href="#" className="card-link">Card link</a> */}
                                <Link to="/dashboard/Getmovies" className="card-text">Get Movie</Link>
                            </div>
                        </div>


                        <div className='card' style={{ width: "18rem" }}>
                            <div className='card-body'>
                                <h5 className="card-title">Get all user</h5>
                                <p className='card-text'>you can see all register user in the database</p>
                                <Link to='/dashboard/getusers' className='cart-text'>GetUsers</Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className='card' style={{ width: "18rem" }}>
                            <div className='card-body'>
                            <h5 className="card-title"> user</h5>
                                <p className='card-text'>you can see all register user in the database</p>
                                <Link to='/dashboard/EditUsers' className='cart-text'>EditUsers</Link>
                            </div>
                        </div> */}

                </div>

            </>)
        {/* } */}
    </>
    )
}

export default Dashboard