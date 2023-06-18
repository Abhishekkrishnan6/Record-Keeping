import { Link , NavLink} from "react-router-dom"
const Header = () => {

const naveLinkStyle=({isActive})=>{
  return {
         textDecoration: isActive? "none" : "underline",
         color: isActive? "red": "white",
         fontSize: "28px"
    
  }
}


  return (
    <div className="header">
      <NavLink style={naveLinkStyle} to={'/app'}> Home  </NavLink>
      <NavLink style={naveLinkStyle} to={'/about'}>  About </NavLink>
      <NavLink style={naveLinkStyle} to={'/contact'}> Contact </NavLink>
       
       </div>
  )
}

export default Header