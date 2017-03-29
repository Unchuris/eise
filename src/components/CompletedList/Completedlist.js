import React, { Component } from 'react';
import $ from 'jquery';
import './style.css';

export default class CompletedList extends Component {
    constructor(props) {
      super(props);
      this.state = {tasks: []};
    }

    componentDidMount() {
      $.ajax({
      url: "http://localhost:80/Completed",
      dataType: 'json',
      cache: false,
      success: function(data) {
      this.setState({tasks: data});
      }.bind(this),
      error: function(xhr, status, err) {
      console.error(this.props.url, status, err.toString());
      }.bind(this)
      });
  }

    handleSubmit() {
    }

    render() {
    return (
    <div>
    {this.state.tasks.map(post => 
      <div className="form__completed-list" key={post.id}>
      <div className="form__img-check"></div>
      {post.name}<div className="hr">
      </div></div>)}
    </div>
    );
  }
}





