import React from 'react'
import {AppBar,Tabs,Tab, Toolbar, Typography} from "@mui/material"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Navbar = () => {
  return (
    <React.Fragment>
      <AppBar sx={{background: "#063970"}}>
        <Toolbar>
         <ShoppingCartCheckoutIcon/>
          <Tabs sx={{marginLeft:"auto"}} textColor="inherit">
            <Tab label="Products"/>

          </Tabs>

        </Toolbar>
      </AppBar>
    </React.Fragment>

    )
}
export default Navbar