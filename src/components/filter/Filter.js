import React, { Component } from 'react';
import './style.css';

export default class Filter  extends Component {
   render() {
   	return(
   	  <div>
   	  <div className="checkbox__text">Фильтровать по:</div>
          <input type="checkbox" className="checkbox" id="-1" />
          <label htmlFor="-1">важности</label>
          <input type="checkbox" className="checkbox" id="-2" />
          <label htmlFor="-2">срочности</label>
          <input type="checkbox" className="checkbox" id="-3" />
          <label htmlFor="-3">понятности</label>
       </div>
    );
  }
}
