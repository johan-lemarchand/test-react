import React, {Component} from 'react';

export default class Nav extends Component {

	render(){ return (
		<div className="App">
			<header className="d-flex justify-content-center">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">Bienvenue sur mon test</a>

					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
								data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							filtre
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							{this.props.movie.map(m => (
								<a className="dropdown-item" href="#">{`${m.category}`}</a>
								))}
								</div>
								</div>

								</nav>
				</header>
		</div>
								);
	}
}

