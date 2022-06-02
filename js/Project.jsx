
import React from 'react';
import Tabs from './Tab.jsx';


class ProjectCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { expand: false, pending_closure: false };
		this.expand = this.expand.bind(this);
        this.move_close_button = this.move_close_button.bind(this);
	}

	change_state( new_state) {
			this.setState({ expand: new_state });
	}

	// Close project if the user scrolls past it
	componentDidMount(){
        // Position close button
        window.addEventListener('scroll', this.move_close_button);

	}

    componentWillUnmount() {
        window.removeEventListener('scroll', this.move_close_button);
    }

    move_close_button() {
        if( this.state.expand ) {
            const start = document.getElementsByClassName("project_expanded")[0].offsetTop - window.innerHeight/2 + 50; 
            const stop = document.getElementsByClassName("project_expanded")[0].offsetTop +  document.getElementsByClassName("project_expanded")[0].clientHeight - window.innerHeight/2 -50; 
            const scrolltop = window.pageYOffset; 

            // Start tracking
            if( scrolltop > start && scrolltop < stop ) {
                document.getElementsByClassName("expanded_close")[0].style.transition = "0s";
                document.getElementsByClassName("expanded_close")[0].style.top = "49vh";
                document.getElementsByClassName("expanded_close")[0].style.position = "fixed";
                
            // Stop tracking
            } else if ( scrolltop > stop ) {
                document.getElementsByClassName("expanded_close")[0].style.position = "absolute";
                document.getElementsByClassName("expanded_close")[0].style.top = "auto";
                document.getElementsByClassName("expanded_close")[0].style.bottom = "20px";

            // If you go up again
            } else if ( scrolltop < start ) {
                document.getElementsByClassName("expanded_close")[0].style.top = "50px";
                document.getElementsByClassName("expanded_close")[0].style.position = "absolute";
            }
        }
    }

    close_expanded_project() {
        const destination = document.getElementsByClassName("project_expanded")[0].offsetTop - window.innerHeight/2 + 50; 
        window.scrollTo( {top: destination} );
        this.change_state(false);
    }

	/* Expand or collapse the project card */
	// TODO: when you expand one project, close all the other ones.
	expand( option ) {
		if(option) {
			return(
				<div className="project_expanded">
                    <div className="expanded_close" onClick={ () => this.close_expanded_project() } >
                        <img src="./js/imported/braket.ai/assets/close.svg" alt="exit button" />
                    </div>
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
