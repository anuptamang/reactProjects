import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { USER_LOGIN_REQUEST } from '../constants/userConstants';
import Button from './Button';
import LayoutContainer from './LayoutContainer';
import Loader from './Loader';

const Login = () => {
  const history = useHistory()
 const dispatch = useDispatch()
 const userLogin = useSelector((state:any) => state.userLogin)
 const { loading, userInfo } = userLogin

  useEffect(() => {
   if (userInfo) {
     history.push('/')
   }
   
 }, [history, userInfo])

  const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
   // Dispatch Login
   dispatch({type: USER_LOGIN_REQUEST, payload: 'Guest'})
  }

  return (
    <LayoutContainer>
      <h2 className="font-bold text-2xl mb-4">Login</h2>
      {/* <p className="mb-3">Use <mark className="bg-red-200">guest</mark> as Username and <mark className="bg-red-200">guest</mark> as password!</p> */}
      <form onSubmit={loginHandler}>
        {/* <div className="form-group mb-4 md:w-1/2">
          <input className="block w-full h-14 bg-red-200 placeholder-black px-4 py-1 rounded" type="text" placeholder="Username" />
        </div>
        <div className="form-group mb-4 w-1/2">
          <input className="block w-full h-14 bg-red-200 placeholder-black px-4 py-1 rounded" type="password" placeholder="Password" />
        </div> */}
        {
          loading && <Loader />
        }
        <Button variant="submit">
          Login
        </Button>
      </form>
    </LayoutContainer>
  )
}

export default Login
