import { useEffect, useState } from 'react'
import { productAction } from "../../../react-redux/action"
import { useDispatch, useSelector } from "react-redux"
import Card from "../../Card/Card"
import "./Home.css";
import FourZeroFour from '../FourZeroFour';
import Pagination from '../../Pagination/Pagination';
// import { useNavigate } from 'react-router-dom';
// import Login from '../Login/Login';
// import Cookies from 'js-cookie'
// import { useNavigate } from 'react-router-dom';
// import Login from '../Login/Login';



function Home() {
  const dispatch = useDispatch();
  const productslist = useSelector(state => state.product)
  const { loading, product, error } = productslist

// const Navigate = useNavigate();
let page =1
console.log(product)
console.log(error)
// console.log(error.data.status)

useEffect(() => {
    dispatch(productAction(page));
  }, [dispatch,page]);



  return (
    <>
      {loading ? (<h1>loading...</h1>) : error ? (<FourZeroFour/>) :
        (<>
          <div className='container'>
            <div className='row'>
              <h2 className='category-name'>
                <span className='material-text'> Latest Movies </span>
              </h2>
            </div>
            <div className='row card-block '>
              {product.map((product) => {
                return (
                  <Card product={product} />
                );
              })}
            </div>
            <Pagination />
          </div>
        </>)}

    </>
  )
}

export default Home