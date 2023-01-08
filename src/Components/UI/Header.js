import React, { useEffect } from "react";
import { useState } from "react";
import {Link} from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Box } from "@mui/system";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



import { AppTheme, sx_styles } from "./AppTheme";

import { Header_data } from "./UI_Data.js/Header_data";
import { Routes_data} from "./UI_Data.js/Routes_Data";





function ElevationScroll(props) {
  const { children} = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


//console.log(sx_styles)





export default function Header(props){

  const [value,setValue]=useState(0)
  const matches = useMediaQuery(AppTheme.breakpoints.down("md"))
  const handleTabChange=(e,value)=>{
    setValue(value);
  }
  
  /** Code to handle Lists within Drawer
   * 
   */
  const ListItemsMap = ( 
    Header_data.Tab_labels.map((item,index)=>{
      return(
      <ListItem 
        key={"ListItem_" + index} 
        disablePadding 
        divider
      >
        <ListItemButton
          key={"ListItemButton_" + index} 
          component={Link}
          to={Routes_data.Labels_to_Route_mapping[item]}
          selected={value===index}
          onClick={()=>{setOpenDrawer(false); setValue(index)}}
          sx={sx_styles.listItemSelected}
        >
          <ListItemIcon key={"ListItemIcon_" + index}>
            {Header_data.Tab_Labels_icon[item]}
          </ListItemIcon>
          <ListItemText key={"ListItemText_" + index} primary={item} />
        </ListItemButton>
        </ListItem>  
      )
    }

    )
  )  
  
  /**  Code to Handle Drawer
   * 
   */
  const [openDrawer, setOpenDrawer]=useState(false)
  const iOS =  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)
  const Drawer = (
    <React.Fragment>
      <SwipeableDrawer 
        disableBackdropTransition={!iOS} disableDiscovery={iOS} 
        open={openDrawer}
        onClose={()=>setOpenDrawer(false)}
        onOpen={()=>setOpenDrawer(true)}
        sx={sx_styles.drawerContainer}  
      >
        <List component="nav" aria-label="main links">
          {ListItemsMap}  
        </List>
      </SwipeableDrawer>
      <IconButton onClick={()=>setOpenDrawer(!openDrawer)} sx={sx_styles.drawerIconContainer} disableRipple>
        <MenuIcon sx={sx_styles.drawerIcon}/>
      </IconButton>
    </React.Fragment>
  )



  /**  Code to Handle Menu */
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const myMenu = ()=>{
    
    if (anchorEl===null){
      return ""
    }
    let MenuItemList =Header_data.Tab_Labels_nesting[anchorEl.innerText].map((item,index)=>{
      return(
        <MenuItem key={index} onClick={handleClose} >{item}</MenuItem>
      )
    })
    return(
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={sx_styles.menuContainer}
      >
        {MenuItemList}
      </Menu>
    )
  }
  
  /**  Code to handle Tab Items */
  const tab_items_list = Header_data.Tab_labels.map((item,index)=>{
    if(item in Header_data.Tab_Labels_nesting){
      return(
          <Tab 
            key={index} 
            value={index} 
            sx={sx_styles.tab} 
            label={item}
            onClick={event=>handleClick(event)}
            component={Link}
            to={Routes_data.Labels_to_Route_mapping[item]} >
          </Tab>
      )
      } else{
        return(
          <Tab 
            key={index} 
            value={index} 
            sx={sx_styles.tab} 
            label={item}
            component={Link}
            to={Routes_data.Labels_to_Route_mapping[item]} >
          </Tab>
        )
      }
  })

const tabs= (
  <React.Fragment>
    <Stack sx={sx_styles.tabContainer} direction="row">
      <Tabs  aria-label="basic tabs example" value={value} onChange={handleTabChange} textColor="secondary" indicatorColor="secondary">
        {tab_items_list}
      </Tabs>
      <Button sx={sx_styles.button} variant="contained" color="secondary">{Header_data.Buttton}</Button>
    </Stack>
    {myMenu()}
  </React.Fragment>
)




  /**  Code to Handle Refresh */

  const refresh_route_checker = (value)=>{
    let existing_path_name = window.location.pathname
    let indexOfShouldBePath=-1
    Object.keys(Routes_data.Labels_to_Route_mapping).every((key,index)=>{
      if (Routes_data.Labels_to_Route_mapping[key]===existing_path_name){
        indexOfShouldBePath=index
        return false
      }
      return true
    })
    if (value!==indexOfShouldBePath){
      setValue(indexOfShouldBePath)
    }
  }

  useEffect(()=>{
    refresh_route_checker(value)
  },[value])
  /*TabIndicatorProps={{sx:sx_styles.tabContainer}}
  */
  return(
    <React.Fragment>
        <Box sx={sx_styles.toolbarmargin}>  
          <ElevationScroll>
            <AppBar position="fixed" color="primary">
              <Toolbar disableGutters>
                <Box sx={sx_styles.logo} component={Link} to="/">
                  <img alt="Company Logo" 
                    src={Header_data.Image_Path} 
                    style={{width:"inherit", height:"inherit"}} 
                  />
                </Box>
                  {matches? Drawer: tabs}
              </Toolbar>
            </AppBar>
          </ElevationScroll>
        </Box> 
  </React.Fragment>
  )
}