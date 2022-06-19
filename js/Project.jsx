
import React from 'react';
import Tabs from './Tab.jsx';


class ProjectCard extends React.Component {
	constructor(props) {
		super(props);
        
		this.state = { expand: false, pending_closure: false, res: "Normal", html_res:"Normal" };
		this.expand = this.expand.bind(this);
        this.move_close_button = this.move_close_button.bind(this);

        // Moving the corrent Closing Button 
        this.closeButton = React.createRef();
	}

	change_state_expand( new_state ) {
		this.setState({ expand: new_state });
	}

    change_state_responsive( new_state ) {
        this.setState({ res: new_state });
    }

	componentDidMount(){
        // Initial width
        if( document.body.clientWidth < 700) { this.change_state_responsive("Mobile"); } else
        if( document.body.clientWidth < 1200) { this.change_state_responsive("Text"); } else
        if( document.body.clientWidth > 1200) { this.change_state_responsive("Normal"); } 

        if( document.body.clientWidth < 700)  { this.setState({ html_res: "Mobile"}) } else
        if( document.body.clientWidth < 1500) { this.setState({ html_res: "Text"}); } else
        if( document.body.clientWidth > 1500) { this.setState({ html_res: "Normal"}); } 

        // Position close button
        if( this.state.res == "Normal" || this.state.res == "Text") window.addEventListener('scroll', this.move_close_button);

        window.addEventListener('resize', (event) => {
            // Note:  If is faster than switch
            if( document.body.clientWidth < 700) { this.change_state_responsive("Mobile"); } else
            if( document.body.clientWidth < 1200) { this.change_state_responsive("Text"); } else
            if( document.body.clientWidth > 1200) { this.change_state_responsive("Normal"); } 

            if( document.body.clientWidth < 700)  { this.setState({ html_res: "Mobile"}) } else
            if( document.body.clientWidth < 1500) { this.setState({ html_res: "Text"}); } else
            if( document.body.clientWidth > 1500) { this.setState({ html_res: "Normal"}); }

        }, true);
	}

    componentWillUnmount() {
        window.removeEventListener('scroll', this.move_close_button);
    }

    move_close_button() {
        if( this.state.expand ) {

            // Make use of React Refs to link to this project's close button
            // Move Button on Scroll
            var parent = this.closeButton.current.parentElement;

            const start = parent.offsetTop - window.innerHeight/2 + 50; 
            const stop = parent.clientHeight + parent.offsetTop - window.innerHeight/2 - 70; 
            const scrolltop = window.pageYOffset; 

            // Start tracking
            if( scrolltop > start && scrolltop < stop ) {
                this.closeButton.current.style.transition = "0s";
                this.closeButton.current.style.top = "49vh";
                this.closeButton.current.style.position = "fixed";
                
            // Stop tracking
            } else if ( scrolltop > stop ) {
                this.closeButton.current.style.position = "absolute";
                this.closeButton.current.style.top = "auto";
                this.closeButton.current.style.bottom = "20px";

            // If you go up again
            } else if ( scrolltop < start ) {
                this.closeButton.current.style.top = "50px";
                this.closeButton.current.style.position = "absolute";
            }
        }
    }

    close_expanded_project() {
        const destination = this.closeButton.current.parentElement.offsetTop - window.innerHeight/2 + 50; 
        window.scrollTo( {top: destination} );
        this.change_state_expand(false);
    }

	/* Expand or collapse the project card */
	expand( option ) {
        
        // Special collapse rules for injected HTML
        if( this.props.type == "html") {
            if (option && this.state.html_res == "Text") {
                return(
                    <div className="project_expanded">
                        <div className="expanded_close" onClick={ () => this.close_expanded_project() } ref={this.closeButton}  >
                            <img src="./js/imported/braket.ai/assets/close.svg" alt="exit button" />
                        </div>
                        <Tabs tag={ this.props.type === "text" ? this.props.tag : (this.props.type==="images") ? this.props.link : this.props.htmlname} 
                              type="text" />
                    </div>
                );
            } else if (option && this.state.html_res == "Mobile") {
                return(
                    <div className="project_expanded__mobile">
                        <Tabs tag={ this.props.type === "text" ? this.props.tag : (this.props.type==="images") ? this.props.link : this.props.htmlname} 
                              type="text" 
                              mobile="true" 
                              link=""
                              git={ this.props.git } />
                    </div>
                );
            }
        }

        // Normal Open Projects: X > 1200
		if(option && this.state.res == "Normal") {
			return(
				<div className="project_expanded">
                    <div className="expanded_close" onClick={ () => this.close_expanded_project() }  ref={this.closeButton} >
                        <img src="./js/imported/braket.ai/assets/close.svg" alt="exit button" />
                    </div>
					<Tabs link={ this.props.type === "images" ? this.props.link : this.props.htmlname} 
                          type={ this.props.type } tag={ this.props.type==="text" ? this.props.tag : null }/>
				</div>
			);

        // 700 < X < 1200 Open Text Projects
        } else if ( option && this.state.res == "Text") {
            return(
				<div className="project_expanded">
                    <div className="expanded_close" onClick={ () => this.close_expanded_project() }  ref={this.closeButton} >
                        <img src="./js/imported/braket.ai/assets/close.svg" alt="exit button" />
                    </div>
					<Tabs tag={ this.props.type === "text" ? this.props.tag : (this.props.type==="images") ? this.props.link : this.props.htmlname} 
                          type="text" />
				</div>
            );

        // Mobile Open Projects : X < 700
        } else if ( option && this.state.res == "Mobile") {
			return(
				<div className="project_expanded__mobile">
					<Tabs tag={ this.props.type === "text" ? this.props.tag : (this.props.type==="images") ? this.props.link : this.props.htmlname} 
                          type="text" 
                          mobile="true" 
                          link={ (this.props.link != null) ? this.props.link : "" }
                          git={ this.props.git } />
				</div>
			);

        // Normal Collapsed Projects
		} else if( this.state.res == "Normal" || this.state.res == "Text" ){
            // The extra div is because of some wierd fallthrough of style attributes
            // The attributes of .expanded-close fall to the first div of the main div.
			return (
                <div className="project">
                    <div></div>
                    <div className="project-container"
                                onClick={ () => this.change_state_expand(!this.state.expand)} >
                        <div>
                            { //<a href={"https://www." + this.props.link} target="_blank" aria-label="link towards live project site"> {this.props.link}</a>
                            }
                            <h2> { this.props.title } </h2>
                            <h3> { this.props.tech } </h3>
                            <p>  { this.props.description } </p>
                        </div>
                    </div>
                    <div className="project-links">
                        <div className="project_link" onClick={ () => { window.open( this.props.git, '_blank')} } >
                            <img src='./assets/github-link_white.svg' alt="button to github repo of project" />
                        </div>
                        <div className={ (this.props.link != null) ? "project_link project_link_second" : "project_link__unavailable project_link_second" } 
                             onClick={ (this.props.link != null) ? () => { window.open( "http://" + this.props.link, '_blank')} : null } >
                            <img src='./assets/live-link_white.svg' alt="button to live website of project" />
                        </div>
                    </div>
                </div>
			);

        // Mobile Collapsed Projects
		} else {
            return(
				<div className="project-container__mobile project-container"
							onClick={ () => this.change_state_expand(!this.state.expand)} >
					<a href={"https://www." + this.props.link} target="_blank" aria-label="link towards live project site"> {this.props.link}</a>
					<h2> { this.props.title } </h2>
					<h3> { this.props.tech } </h3>
				    <img src= './assets/expand_arrow_white.svg' alt="expand project" />
				</div>
            );
        }
	}

	render() {
		return (
			<div>
				{ this.expand(this.state.expand) }
			</div>
		)
	}
}


export default ProjectCard;
