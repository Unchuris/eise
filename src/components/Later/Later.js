import React, { Component } from 'react';
import $ from 'jquery';
import './style.css';

export default class Later extends Component {
    constructor(props) {
      super(props);
      this.state = {tasks: []};
    }

    componentDidMount() {
      $.ajax({
      url: "http://localhost:80/Later",
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
      <div className="form__completed-list-today" key={post.id}>   
            <div className="checkbox-list-c"></div>      
            <div className="name-text">{post.name}</div>
            <div className="form_submit-star">
            <input type="checkbox" className="checkbox-star" id={post.id} />
            <label htmlFor={post.id}></label> 
            </div>
            <div className="form_submit-img-del"></div>
            <input className="form__submit-del" type="submit" value=" "></input>
            <div className="hr__today"></div>
        </div>)}
    </div>
    );
}
}
