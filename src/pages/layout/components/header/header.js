import React, { Component } from 'react';
import { Link } from 'react-router';

import './header.css';
import logo from "../../../images/Eise.png";


export default class header extends Component {
  render() {

    return (
      <div>
      <header className="header">
          <div className="header__internal">
            <Link className="header__logo" to="/">
              <img src={logo} alt="EiseTasks"></img>
            </Link>
            <div className="header__user-img">
            
            </div>
            <div className="header__user">Екатерина</div>   
          </div> 
          <nav className="header__nav">
            <Link className="nav__ref" to="/today">На сегодня</Link>
            <Link className="nav__ref" to="/">Разместить</Link>
            <Link className="nav__ref" to="/later">На потом</Link>
            <Link className="nav__ref" to="/completed">Выполнено</Link> 
          </nav>
      </header>          
      </div>
    );
  }
}
//    const {userImg, userName} = this.props;
//<img src="{userImg}" alt={userName}/>