import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom"
import { USER_LOGOUT_REQUEST } from '../constants/userConstants'

const Nav = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const userLogin = useSelector((state:any) => state.userLogin)
  const cartStore = useSelector((state:any) => state.cart.cartItems)
  const { userInfo } = userLogin
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')
  

  const logoutHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch({type: USER_LOGOUT_REQUEST})
    localStorage.removeItem('cartItems')
    history.push('/')
  }

  const toggleTheme = () => {
    setCurrentTheme(theme => theme === 'dark' ? 'light' : 'dark')
  }
  
  useEffect(() => {    
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [currentTheme])

  return (
    <>
      <nav className="nav pb-3">
            <div className="nav__drop">
            <ul className="list-none flex">
              <li className="px-1"><Link className="block p-2 text-black bg-red-200 dark:bg-gray-600 dark:text-white hover:opacity-60 md:mx-1 rounded" to="/">Home</Link></li>
            {
              !userInfo &&
              <><li className="px-1"><Link className="block p-2 text-black bg-red-200 dark:bg-gray-600 dark:text-white hover:opacity-60 md:mx-1 rounded" to="/login">Login</Link></li>
               <li><Link className="block p-2 text-black bg-red-200 dark:bg-gray-600 dark:text-white hover:opacity-60 md:mx-1 rounded" to="/signup">Signup</Link></li></>
            }
            {
              userInfo &&
              <><li className="px-1"><button onClick={logoutHandler} className="block p-2 text-black bg-red-200 dark:bg-gray-600 dark:text-white hover:opacity-60 md:mx-1 rounded">Logout</button></li>
              <li className="px-1"><Link to="/cart" className="block p-2 text-black bg-red-200 dark:bg-gray-600 dark:text-white hover:opacity-60 md:mx-1 rounded">Cart({cartStore.length})</Link></li></>
            }              
              <li className="px-1"><button className="dark-mode-toggle block p-2 text-black bg-red-200 dark:bg-gray-600 dark:text-white hover:opacity-60 md:mx-1 rounded" onClick={toggleTheme}>
                 {currentTheme === 'dark' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      stroke='currentColor'
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                      stroke='currentColor'
                      className='w-6 h-6 text-gray-800 dark:text-gray-200'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
                      ></path>
                    </svg>
                  )}
                </button></li>
            </ul>
            </div>
          </nav>
    </>
  )
}

export default Nav
