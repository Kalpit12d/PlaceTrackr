import React from "react";

import './MainHeader.css';


const MainHeader = props => {
  return <header className="main-header">{props.children}</header>;
};
export default MainHeader;



// props.childresm is special provided by react which take data within th closin and opening tag of Mainheader;
//so whatever is in between <MainHeader>.......<MainHeader/> will be executed by props.children;