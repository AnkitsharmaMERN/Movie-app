import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import { GetallUsers } from '../../../../react-redux/userAction';
import CardadminUsers from '../../../Card/CardadminUsers';
import { useDispatch, useSelector } from 'react-redux'
import FourZeroFour from '../../../Pages/FourZeroFour';



function GetUsers() {
    const dispatch = useDispatch();
    const allusers = useSelector(state => state.adminallusers)
    const { loading, users, error } = allusers
    // const Navigate = useNavigate()

    useEffect(() => {
        dispatch(GetallUsers())
    }, [dispatch])





    return (<>
        {loading ? (<h1> loading...</h1 >) : error ? (<FourZeroFour />) :
            (
                <div>
                    <div className='container'>
                        <div className='row'>
                            <h2 className='category-name'>
                                <span className='material-text'> Latest Movies </span>
                            </h2>
                        </div>
                        <div className='row '>
                            {users.map((users) => {
                                return (
                                    <CardadminUsers users={users} />
                                );
                            })}
                        </div>
                    </div>

                </div>
            )}
    </>)
}

export default GetUsers