import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  useMediaQuery,
  useTheme,
  Button,
  Typography,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import DrawerC from "./Drawer";
const PAGES =["Products","Services","About us","contact us"]

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  // console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography>SHOPEE</Typography>
              <DrawerC />
            </>
          ) : (
            <>
              <ShoppingCartCheckoutIcon />
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {
                  PAGES.map((page,index)=>(
                <Tab key={index} label={page} />

                  ))
                }
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default Navbar;
