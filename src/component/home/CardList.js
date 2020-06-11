import React, {Component} from 'react';
import LikeButton from "./ButtonLike";
import DeleteButton from "./ButtonDelete";

export default class CardList extends Component {


	render() {
		return (
			<div className="header-card  d-flex">
				{this.props.movie.map(m => (
					<div className="card d-flex" >

						<h5 className="card-title">{`${m.title}`}</h5>


						<div className="card-body ">
							<h6 className="card-subtitle mb-2 text-muted">{`${m.category}`}</h6>
							<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque eius libero maxime quas recusandae. Alias aperiam blanditiis consectetur consequatur distinctio ducimus explicabo impedit incidunt itaque libero magnam, minus nemo nostrum perspiciatis quibusdam recusandae rem vero voluptatum! Accusantium ad architecto culpa, doloremque esse eveniet optio porro quam quis suscipit temporibus voluptatum.</p>
							<div className="card-bottom">

								<LikeButton />

							</div>
							<div className="button-fa">
							<button onClick="" className="fa fa-thumbs-up">{`${m.likes}`}</button>
							<button onClick="" className="fa fa-thumbs-down">{`${m.dislikes}`}</button>
							</div>
						</div>

					</div>
				))}
			</div>
		);
	}

}

