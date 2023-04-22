import React from 'react'
import {useDispatch, useSelector}from 'react-redux'
import {useEffect} from 'react'
// import { useNavigate } from 'react-router-dom'
import {AdminProducts} from '../../../../react-redux/action'
import FourZeroFour from '../../../Pages/FourZeroFour'
import Cardadmin from '../../../Card/Cardadmin'





function GetMovies() {
 
  const dispatch = useDispatch();
  const allMovies = useSelector(state => state.admingetproduct)
  const { loading, product, error } = allMovies
//  const Navigate = useNavigate()
 
//  console.log(error)


  useEffect(() => {
    // if (error.data){
    //   alert(error.data)
    //     Navigate("/login")
    // }
    dispatch(AdminProducts());
  }, [dispatch]);
 
 
 
 
 
 
 
  return (
    <>
    {loading ? (<h1>loading...</h1>) : error ? (<FourZeroFour/>) :
      (
      <>
        <div className='container'>
          <div className='row'>
            <h2 className='category-name'>
              <span className='material-text'> Latest Movies </span>
            </h2>
          </div>
          <div className='row '>
            {product.map((product) => {
              return (
                <Cardadmin product={product} />
              );
            })}
          </div>
        </div>
      </>)}

  </>
  )
}

export default GetMovies