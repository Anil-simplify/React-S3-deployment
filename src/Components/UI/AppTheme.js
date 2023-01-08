import { createTheme } from '@mui/material/styles';


export const AppColors={
myBrown:'#E3DBDB',
LightCyan: '#E6FFFF',
DarkCyan:'#00A1A1',
myRed: '#c40000'
}


export const ThemeConfig = {

  palette: {
    common: {
      brown:`${AppColors.myBrown}`,
      cyan:`${AppColors.myCyan}`,
      opaquecyan:`${AppColors.OpaqueLightCyan}`
    },
    primary: {
      main: `${AppColors.LightCyan}`,
    },
    secondary: {
      main: `${AppColors.DarkCyan}`
    }
  },
  typography:{
    tab:{
      fontFamily:"Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    }
  }
};

export const AppTheme=createTheme(ThemeConfig);


export const sx_styles = {
  toolbarmargin:{
    ...AppTheme.mixins.toolbar,
    marginBottom: "2em"
  },
  logo:{
    height: "6em"
  },
  tabContainer:{
    marginTop: '1.5em',
    marginLeft: 'auto',
    marginRight: "20px"
  },
  tab:{
    ...AppTheme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  tabIndicator:{
    backgroundcolor:"black",
    fontcolor:"primary"
  },
  menuContainer:{
    '& .MuiPaper-root': {
      backgroundColor: AppTheme.palette.primary.main
    }
  },
  button:{
    ...AppTheme.typography.tab,
    height:"2.5em",
    marginTop: "0.1em",
    minWidth: 10,
    marginLeft: "25px"
  },
  drawerContainer:{
    '& .MuiPaper-root': {
      backgroundColor: AppTheme.palette.primary.main
    }
  },
  drawerIconContainer:{
    marginLeft: "auto",
    marginTop: '1em',
    "&:hover":{
      backgroundcolor: "transparent"
    }
  },
  listItemSelected:{
    backgroundColor:AppTheme.palette.primary.main
  },
  drawerIcon:{
    hieght: "50px",
    width: "50px"
  }
}

