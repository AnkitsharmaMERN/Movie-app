import React, {useState } from "react"
import { productAction } from "../../react-redux/action"
import { useDispatch } from "react-redux"

const Pagination = () => {
    const dispatch = useDispatch();


    // This is pagination function =========================================
    // const [page, setpage] = useState(1)

    // console.log(page)


    // const Pageprevious = () => {
    //     // console.log(page)
    //     if (page > 1) {
    //         // console.log(page)
    //         let pagenumber = page - 1
    //         // console.log(pagenumber)
    //         setpage(pagenumber)
    //     }
    // }
    // const Pagenext = () => {
    //     console.log(page)
    //     if (page < 100) {
    //         // console.log(page)
    //         let pagenumber = page + 1
    //         // console.log(pagenumber)
    //         setpage(pagenumber)
    //     }
    // }
    //=================================================================================================================



    //This is limit is pass through props 
    // const datalimit = 5;
    // const totaldata = 15;
    // console.log(totaldata)

    const [counter, SetCounter] = useState(2)

    // useEffect(() => {
        // const value = datalimit * counter;
        // const startdata = value - datalimit;
        // const enddata = value;
        // Pagedatachange(value - datalimit, value);
        // dispatch(productAction(counter))
    // }, [dispatch,counter])


    const handelprivious = () => {
        if (counter === 1) {
            SetCounter(1)
           
        }
        else {
            SetCounter(counter - 1)
            dispatch(productAction(counter))
        }

    }

    const handelnext = () => {
        // if (Math.ceil(totaldata / datalimit) === counter) {
            if(15>= counter ){
            SetCounter(counter +1)
            // console.log(counter)
            dispatch(productAction(counter))
        }
        else {
            SetCounter(counter)
        }
    }


    return (
        //  <div className='row'>
        //       <button type="button" className="btn btn-light md-6" onClick={Pageprevious}>Previous</button>

        //       <button type="button" className="btn btn-light" onClick={Pagenext}>Next</button>
        //     </div> 
        < div className='container ' >
            <div className='row'>
                <nav aria-label="Page navigation example ">
                    <ul className="pagination justify-content-between">
                        <button type="button" className="btn btn-outline-primary" onClick={handelprivious}>Privious</button>
                        {/* <li className="page-item"><a className="page-link" onChange={handelclick}>1</a></li>
              <li className="page-item"><a className="page-link" onChange={handelclick}>2</a></li>
              <li className="page-item"><a className="page-link" onChange={handelclick}>3</a></li> */}
                        <button type="button" className="btn btn-outline-primary" onClick={handelnext}>Next</button>
                    </ul>
                </nav>
            </div>
        </div >
        // <div className="container">
        //     <nav aria-label="...">
        //         <ul className="pagination justify-content-center">
        //             <li className="page-item disabled">
        //                 <span className="page-link">Previous</span>
        //             </li>
        //             <li className="page-item"><a className="page-link" href="#">1</a></li>
        //             <li className="page-item active" aria-current="page">
        //                 <span className="page-link">2</span>
        //             </li>
        //             <li className="page-item"><a className="page-link" href="#">3</a></li>
        //             <li className="page-item">
        //                 <a className="page-link" href="#">Next</a>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>
    )
}

export default Pagination
