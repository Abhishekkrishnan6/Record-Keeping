import React from 'react'
import { Link , Outlet} from 'react-router-dom'

const contact = () => {
  return (
    <>
    <Link to={'insta'}><h4>Contact via insta</h4></Link>
    <Link to={'twitter'}><h4>contact via twitter</h4></Link> 
    <Outlet />  
    
    
    </>
  )
}

export default contact