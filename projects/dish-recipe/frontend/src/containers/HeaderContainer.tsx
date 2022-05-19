import React from 'react'
import Logo from '../components/Logo'
import Nav from '../components/Nav'

const HeaderContainer = () => {
  return (
    <>
       <header className="header fixed left-0 right-0 top-0 z-50 bg-red-300 dark:bg-gray-900">
        <div className="px-4 md:py-3 mx-auto md:flex md:justify-between md:items-center">
          <Logo />
          <Nav />
        </div>
      </header>
    </>
  )
}

export default HeaderContainer
