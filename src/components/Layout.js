import Header1 from './Header1';

import Themes from './themes';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'

import  {useState, createContext}  from 'react';
import Home from './Home';
const Layout = ({children}) => {
  const [theme,setTheme] = useState('light');
  const changetheme =() =>{
    setTheme(theme=="light"?"dark":"light");
  }
  
   return (
   <ThemeProvider theme={Themes[theme]}>
    <LayoutWrapper onClick={changetheme}>
    <Header1 />
     {/* {children} */}
  
     </LayoutWrapper>
    </ThemeProvider>


  )
}

const LayoutWrapper = styled.div`
    background-color: ${(props)=> props.theme.bgcolor};
    background-image: ${(props)=> props.theme.bgImage};
    color: ${(props)=> props.theme.color};
`


export default Layout