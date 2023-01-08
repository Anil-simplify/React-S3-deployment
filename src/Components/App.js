import { Route, Switch} from "react-router-dom"

import Header from "./UI/Header";
import { Routes_data } from "./UI/UI_Data.js/Routes_Data";
import { ThemeProvider } from "@emotion/react";
import { AppTheme } from "./UI/AppTheme";


function App() {

  const Routes_list = Routes_data.Routes.map((item,index)=>{
    return (
    <Route 
      key={index} 
      exact 
      path={item}
      component={()=><div>{item}</div>} >
    </Route>)
  })
  


  return (
  <ThemeProvider theme={AppTheme}>
      <Header />
      <Switch>
        {Routes_list}
      </Switch>
  </ThemeProvider>
  );
}

export default App;
