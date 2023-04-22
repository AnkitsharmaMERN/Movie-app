import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
// import {persistStore,persistReducer} from 'redux-persist'
// import storage from "redux-persist/lib/storage";
import { productReducer, productDetailsReducer} from "./react-redux/reducer";
import { Registration, loginReducer, getuserdetails,AddFavoriteMovieReducer  } from "./react-redux/userReducer"

// this is for admin 
import { AdminproductReducer,AdminProductUpdateReducer, AdminProductRemoveReducer,  } from './react-redux/reducer'
import { Getusersreducer } from "./react-redux/userReducer";

const rootReducer = combineReducers({
    product: productReducer,
    productDetails: productDetailsReducer,
    login: loginReducer,
    profile: loginReducer,
    signup: loginReducer,
    adminallusers: Getusersreducer ,
    admingetproduct: AdminproductReducer,
    adminremoveproduct: AdminProductRemoveReducer,
    Updateproduct:AdminProductUpdateReducer,
    moviesfavorites:AddFavoriteMovieReducer
})
//for redux persist we need to create persist-config, persist-reducer,  store  they all for persist ------------------------------------------------------------
// const persistconfig = {
//     key:'root', // we can take any name of this key 
//     storage
// }

// const PersistedReducer = persistReducer(persistconfig, rootReducer)


let initialState = {};
const middleware = [thunk]

 const store = createStore(
    rootReducer, initialState,  //PersistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
    
    );

// const persistor = persistStore(store)    
    
//---------------------------------------------------------------------------------------------------


export default store  //{store,persistor} 
