import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { productCreateReducer, productListReducer } from './reducers/productReducers'
import { userLoginReducer } from './reducers/userReducers'
import mySaga from './sagas'
import { cartReducer } from './reducers/cartReducers';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
  userLogin: userLoginReducer,
  productList: productListReducer,
  productCreate: productCreateReducer,
  cart: cartReducer,
})

const userInfoFromLocalStorage = JSON.parse(localStorage?.getItem('userInfo') || 'null')

const cartItemsFromLocalStorage = JSON.parse(localStorage?.getItem('cartItems') || '[]')


const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
  cart: { cartItems: cartItemsFromLocalStorage },
}

// mount it on the Store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(mySaga)

export default store
