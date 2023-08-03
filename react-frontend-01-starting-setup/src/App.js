import React,{useState,useCallback} from 'react';

import {BrowserRouter as Router,Route,Redirect, Switch} from 'react-router-dom';


import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';
import UserPlaces from './places/pages/UserPlaces';
import NewPlace from './places/pages/NewPlace';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import { AuthContext } from './shared/context/auth-context';

function App() {
const [isLoggedIn,setIsLoggedIn] = useState(false);

  const login = useCallback(()=>{
    setIsLoggedIn(true);
  },[]);
  const logout = useCallback(()=>{
    setIsLoggedIn(false);
  },[]);

  let routes;
  if(isLoggedIn){
    routes=(
      <Switch>
    <Route path="/" exact>
  <Users />
 
  </Route>
  <Route path="/:userId/places" exact>
    <UserPlaces />
  </Route>
  <Route path="/places/new" exact>
   <NewPlace />
    </Route>
    <Route path="/places/:placeId">
      <UpdatePlace />
    </Route>
    <Redirect to="/"/>
    </Switch>
   );
  }
  else{
    routes=(
      <Switch>
      <Route path="/" exact>
    <Users />
   
    </Route>
    <Route path="/:userId/places" exact>
      <UserPlaces />
    </Route>
    <Route path="/auth">
      <Auth />
    </Route>
    <Redirect to="/auth"/>
    </Switch>
    );
  }



  return (
   <AuthContext.Provider 
   value={{isLoggedIn: isLoggedIn, login:login , logout:logout }}
   >
  <Router>
  <MainNavigation />
  <main>
     
     {routes}
  
  </main>
  </Router>
  </AuthContext.Provider>
  );
};

export default App;
//exact is added when path is / then only users will be render otherwise all the path start with / will render users.
//redirect will go to/ route if the route provides is not in <route><route/>(unsupported route);
// switch make sure that only one particular route or redirect works
//soo all routes and redirect are kept inside switch
// we kept mainavigation above all coz it doen require any route we want navigation bar at every page;
// /;userid- it dynamic content using reactor router dom module its component named useParams will give creator id and accordingle that placed whose creator id is equal to that will render;