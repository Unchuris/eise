import React, { Component } from 'react';
import './Completed.css';
import List from '../../components/CompletedList/Completedlist.js';

export default class Completed extends Component {
  render() {
    return (
      <div>
      <main className="block-content-component">
      <div className="scrollbar">
      <section className="block-completed-list">
      <List />
      </section>
      </div>
      </main>
      </div>
    );
  }
}



     
  