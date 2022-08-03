import React,{useState} from 'react'
import { Drawer,List, ListItemButton, ListItemIcon, ListItemText,IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const PAGES =["Products","Services","About us","contact us","Login", "Logout"]

 const DrawerC = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
    <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
      <List>
        {
            PAGES.map((page,index)=>(
              <ListItemButton key={index} onClick{()=>setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>
                  {page}  
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>

            ))
        }
       
      </List>
    </Drawer>
    <IconButton sx={{color:'white', marginLeft: 'auto'}} onClick={()=> setOpenDrawer(!openDrawer)}>
    <MenuIcon/>
    </IconButton>
    </>
  )
}
export default DrawerC