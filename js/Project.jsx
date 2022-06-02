
import React from 'react';
import Tabs from './Tab.jsx';


class ProjectCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { expand: false, pending_closure: false };
		this.expand_state = { "stejar.casa": false, "claritatea.netlify.app/": false, "braket.ai": false, "lists.directory": false, "4": false, "5": false};
		this.expand = this.expand.bind(this);
	}

	change_state( new_state) {
			this.setState({ expand: new_state });
	}

	// Close project if the user scrolls past it
	componentDidMount(){
		
	}


	/* Expand or collapse the project card */
	// TODO: when you expand one project, close all the other ones.
	// TODO: close project when out of view
	expand( option ) {
		if(option) {
			this.expand_state[this.props.link] = true;
			return(
				<div className="project_expanded">
					<Tabs link={ this.props.type === "images" ? this.props.link : this.props.htmlname} type={ this.props.type }/>
				</div>
			);

		} else {
			return (
				<div className="project-container"
							onClick={ () => this.change_state(!this.state.expand)} >
					<a href={"https://www." + this.props.link} target="_blank"> {this.props.link}</a>
					<h2> { this.props.title } </h2>
					<h3> { this.props.tech } </h3>
					<p>  { this.props.description } </p>
				</div>
			);
		}
	}


	render() {
		return (
			<div>
				{ this.expand(this.state.expand) }
				{ /*!this.state.correct_height && this.state.expand ? this.update_image_height() : "" */ }
			</div>
		)
	}
}


export default ProjectCard;
