import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { getuserdetails } from './react-redux/userAction'
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import MoviePage from './component/Pages/MovieDetails/MoviePage';
import Dashboard from './component/Admin_page/Dashboard/Dashboard';
import AddMovie from './component/Admin_page/MovieAccess/AddMovie/AddMovie';
import Signup from './component/Pages/Signup/Signup';
import Login from './component/Pages/Login/Login';
import About from './component/Pages/About/About';
import Contact from './component/Pages/Contact/Contact';
import FourZeroFour from './component/Pages/FourZeroFour'
import Profile from './component/Pages/userdetails/Profile';
// import Codeverify from './component/Pages/resetpassword/codeverify';
import UpdatePassword from './component/Pages/resetpassword/updatePassword';
import ForgetPassword from './component/Pages/resetpassword/ForgetPassword';
import Search from './component/Pages/Search/Search';
import GetMovies from './component/Admin_page/MovieAccess/GetMovies/GetMovies';
import EditMovies from './component/Admin_page/MovieAccess/updateMovie/EditMovies'
// import DeleteMovie from './component/Admin_page/MovieAccess/DeleteMovie/DeleteMovies';
import GetUsers from './component/Admin_page/UsersAccess/Getuser/GetUsers';
import Favourite from './component/Pages/FavouriteMovie/Favourite';
import ProtectedRoute from './component/Route/ProtectedRoute';





function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getuserdetails())
  }, [dispatch])


  return (
    <>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route exact path="/moviepage/:id" element={<ProtectedRoute><MoviePage /></ProtectedRoute>} />
          <Route exact path='/dashboard/addmovie' element={<ProtectedRoute><AddMovie /></ProtectedRoute>} />
          <Route exact path='/dashboard/getmovies' element={<ProtectedRoute><GetMovies /></ProtectedRoute>} />
          <Route exact path='/dashboard/editmovies/:id' element={<ProtectedRoute><EditMovies /></ProtectedRoute>} />
          {/* ========================================================= */}
          <Route exact path='/forget_password' element={<ForgetPassword />} />
          <Route exact path='/reset-password' element={<UpdatePassword />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route path="*" element={<FourZeroFour />} />
          <Route exact path='/dashboard/getusers' element={<GetUsers />} />
          {/* <Route exact path='/code' element={<Codeverify/> } />  */}
          <Route exact path='/profile' element={<Profile/>} />
          <Route exact path='/search' element={<Search />} />
          {/* <Route exact path='/dashboard/deletemovie/:id' element={<DeleteMovie />} /> */}
          {/* page not make ========================================================= */}
          <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>} />
          <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
          <Route exact path='/favourite' element={<Favourite />} />
           {/* ========================================================= */}


        </Routes>
        <Footer />
      </Router>;
    </>
  );
}

export default App;
