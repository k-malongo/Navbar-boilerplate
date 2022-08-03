import React,{useState} from 'react'
import {AppBar,Tabs,Tab, Toolbar, Typography,Button} from "@mui/material"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Navbar = () => {
  const[value,setValue] = useState()
  return (
    <React.Fragment>
      <AppBar sx={{background: "#063970"}}>
        <Toolbar>
         <ShoppingCartCheckoutIcon/>
          <Tabs  textColor="inherit" value={value} onChange={(e, value)=>setValue(value)} indicatorColor="secondary">
            <Tab label="Products"/>
            <Tab label="Services"/>
            <Tab label="contact us"/>
            <Tab label="About us"/>


          </Tabs>
          <Button sx={{marginLeft:"auto"}} variant="contained">Login</Button>
          <Button sx={{marginLeft:"10px"}} variant="contained">SignUp</Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>

    )
}
export default Navbar