import React, { Component } from 'react';
import './styleTaskAdd.css';
import $ from 'jquery';

export default class TaskAdd  extends Component {
	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    $.ajax({
            url:'http://localhost:80/Today'
            , type:'POST'
            , data: {'name': this.state.value}
            , success: function(res) {
               
            }
        });
    event.preventDefault();
  }

   render() {
   	return(
   	 <form onSubmit={this.handleSubmit}>
        <input className="form__add" 
          	type="text" 
          	placeholder="Новая задача" 
        	onChange={this.handleChange}>
        </input>
        <div className="form_submit-img"></div>
        <input className="form__submit" 
           	type="submit" 
           	value="Добавить">
        </input>
      </form>
    );
  }
}


