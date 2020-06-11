import React, {Component} from 'react';
import Nav from "./Nav";
import CardList from "./CardList";
import './Home.css';
import {movies$} from "../../Movies";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		};

	}

	componentDidMount() {
		movies$.then(movies => this.setState({movies}))

	}

	render() {
		return (
			<div className='container-fluid '>
				<div>
					<Nav movie={this.state.movies} />
				</div>
				<div className='box2'>

					<CardList movie={this.state.movies}/>

				</div>
			</div>
		);
	}
}

export default Home