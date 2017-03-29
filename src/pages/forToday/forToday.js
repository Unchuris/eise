import React, { Component } from 'react';
import './forToday.css';
import TaskAdd from '../../components/TaskAdd/TaskAdd.js';
import Filter from '../../components/filter/Filter.js';
import Today from '../../components/GetListToday/Today.js';

class App extends Component {
  render() {
    return (
      <div>
      <main>
        <section className="block-content">
          <div className="block-content__form">
          <TaskAdd/>
          <Filter/>             
          <div className="hr__today-1"></div><
              Today/>
          </div>      
        </section>
      </main>           
      </div>
    );
  }
}

export default App;
