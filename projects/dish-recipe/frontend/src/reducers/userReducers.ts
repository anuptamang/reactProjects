import {
  USER_LOGIN_FAIL, USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS
} from '../constants/userConstants'
 
export const userLoginReducer = (state = {}, action:any) => {
 switch (action.type) {
   case USER_LOGIN_REQUEST:
     return { loading: true }
   case USER_LOGIN_SUCCESS:
     return { loading: false, userInfo: action.user }
   case USER_LOGIN_FAIL:
     return { loading: false, error: action.user }
   case USER_LOGOUT_SUCCESS:
     return {}
   default:
     return state
 }
}
