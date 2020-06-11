import React, {Component} from 'react';
import {movies$} from "../../Movies";

class LikeButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		};

		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		movies$.then(movies => this.setState({movies}))
	}

	handleClick() {
		this.setState({
			likes: !this.state.likes
		});
	}

	render() {

		const label = this.state.likes? 'dislikes' : 'likes'
		return (
			<div className="customContainer">
				<button className="btn btn-primary" onClick={this.handleClick}>
					{label}</button>

			</div>
		);
	}
}
export default LikeButton;