/*
import React, {Component} from 'react';
import {movies$} from "../../Movies";

class DeleteButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		};
		this.handleClick = this.handleClick.bind(this)
		this.handleClickIndex = this.handleClickIndex.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	componentDidMount() {
		movies$.then(movies => this.setState({movies}))
	}

	handleClick(event){

		eval(this[event.target.name]).bind(this)(event)
	}
	handleClickIndex(index, event){
		eval(this[event.target.name]).bind(this)(index, event)
	}
	handleChange(event){
		eval(this[event.target.name]).bind(this)(event)
	}
	removeTask(index, event) {
		const tasks = this.state.movies
		tasks.splice(index, 1)
		this.setState({tasks})
	}

	render() {
		return (
		 <button name="removeTask" onClick={event=>this.handleClickIndex(index,event)}>Supprimer</button>
		);
	}
}
export default DeleteButton;*/
