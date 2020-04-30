import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = (props) => {

return (
    <div className="tabs-style tabs-header-style tabs-content-style">        
        <NavLink to="/calendar" activeStyle={{backgroundColor: "#92BB24", color: "white"}} className="link tab-header-style">Calendar</NavLink>        
        <NavLink to="/countries" activeStyle={{backgroundColor: "#92BB24", color: "white"}} className="link tab-header-style">Countries</NavLink>        
    </div>
  )
};

export default Header;
