import React from 'react'
import MainNavBar from './MainNavBar'
import MainFooter from './MainFooter'

const Layout = ({children}) => {
  return (
    <div>
        <MainNavBar />
        {children}
        <MainFooter />

    </div>
  )
}

export default Layout