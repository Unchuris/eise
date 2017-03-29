import React, { Component } from 'react';
import './forLater.css';
import TaskAdd from '../../components/TaskAdd/TaskAdd.js';
import Laterlist from '../../components/Later/Later.js';

class Later extends Component {
  render() {
    return (
      <div>
      <main>
        <section className="block-content">
          <div className="block-content__form">
            <TaskAdd/>

           <div className="block-content__forLater">

              <Laterlist />
           </div>
          </div> 
         </section>
      </main>             
      </div>
    );
  }
}



export default Later;


