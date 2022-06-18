

import React from 'react';
import sites from '../description.json';
import search_data from './imported/search-result.json';

// HTML inject imports
// TODO: Lazy Load these
import DatasetPage from './imported/braket.ai/DatasetPage.jsx';
import DatasetSearchCard from './imported/braket.ai/DatasetSearchCard.jsx';
import { Entry, news, CommentPrompt, MessagePrompt, Notification, RequestPrompt, ContributionUpdate, Challange } from './imported/braket.ai/landing.jsx';



/* Data structure for the project card expanded height-sensitive comments */
const Comments = function(props) {
	var idx = 0;
	var html = [];

	for( const comment in sites[props.site]["tabs"][props.tab]["comments"]) {
		html[idx] = <div className="presentation-comment">	
									<p> {sites[props.site]["tabs"][props.tab]["comments"][idx]["text"]} </p>
								</div>
		idx++;
	}

	return(
		<div className="comments">
			{html}
		</div>
	);
}



class Tabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = { tab: '0' };
		this.generate_tab_buttons = this.generate_tab_buttons.bind(this);
	}


/* If the tab is an image presentation, set the height of the height-sensitive comments  */
	componentDidMount() {
		if( this.props.type === "images" ) {
			var depths = [];
			var current_depth = 0;

			// Grab depths from json
			for( let i = 0; i < parseInt(sites[this.props.link]["tabs"][this.state.tab]["numcom"]); i++) {
				let depth = sites[this.props.link]["tabs"][this.state.tab]["comments"][i]["depth"];
				depths[i] = depth;
			}

			// iterate through comments and apply
			var comms = document.getElementsByClassName("presentation-comment");
			for( let i = 0; i < comms.length; i++) {
				const depth = depths[i] - current_depth;
				comms[i].style.marginTop = depth + "px";
				current_depth += depth + comms[i].clientHeight;
			}
		}
	}



/* Grab the HTML structure of HTML presentations. For onw only one. */
	getHTML( site, tab=0 ) {
		switch(site) {
			case "braket.ai":
				switch(tab) {

					case '0':
						return <DatasetPage title="" description="" />
						break;

					case '1':
                        var news_ui = [];
                        for( const i of news.news ) {
                            switch(i.type) {
                                case 'contribution-update':
                                    news_ui.push(<Entry content={ <ContributionUpdate result={i.result} ticket={i.ticket} />} />);
                                    break;
                                case 'message':
                                    news_ui.push(<Entry content={ <MessagePrompt title={i.title} author={i.author} message={i.message} />} />);
                                    break;
                                case 'comment':
                                    news_ui.push(<Entry content={ <CommentPrompt level={1} original={i.original} comments={i.replies} />} />);
                                    break;
                                case 'request':
                                    news_ui.push(<Entry content={ <RequestPrompt title={i.workforce} message={i.message} num={i.num} task={i.task} deadline={i.deadline} />} />);
                                    break;
                            }
                        } 
                        return (
                            <div className="braket-ai">
                                {news_ui}
                            </div>
                        );
						break;

					case '2':
						const ui = search_data.results.map( (x) => (
								<DatasetSearchCard
										name={x.name}
										description={x.description}
										data={x.data}
										snippet={x.snippet}
										licence={x.licence}
										tags={x.tags}
										score={x.score}
									/>
						));
						return(
							<div className="braket-ai">
								{ui}
							</div>
						);
						break;
				}
			default:
				throw "ProjectCard / HTML : Invalid HTML inject target." + site;
		}
	}

	generate_tab_buttons() {
		var buttons = [];
		for( const tab in sites[this.props.link]["tabs"] ) {
			buttons[tab] = <p onClick={ () => this.change_tab(tab) } className={ (tab == this.state.tab) ? "tab-selected" : null}> {sites[this.props.link]["tabs"][tab]["name"]}	</p>
		}
		return (buttons.length > 1) ? buttons : "";
	}


	change_tab( tab_num ) {
		this.setState({ tab: tab_num });
	}


	render() {
		if( this.props.type === "images" ) {
			return(
					<div className="expanded_restrain">
						<div className="expanded_about">
							<h3>About</h3>
							<p> {sites[this.props.link]["description"]} </p>
						</div>
						<div className="tab-selector">
							<div>
									{ this.generate_tab_buttons() }
							</div>
						</div>
						<div className="expanded_images">
							<Comments site={this.props.link} tab={this.state.tab} />
							<div className="images">
									<img src={sites[this.props.link]["tabs"][this.state.tab]["desktop"]} alt={ "Desktop version of the website " + this.props.link } />
								<img src={sites[this.props.link]["tabs"][this.state.tab]["mobile"]}  alt ={ "Mobile version of the website " + this.props.link } />
							</div>
							</div>
					</div>
			);

		} else if ( this.props.type === "html" ) {
			return(
					<div className="expanded_restrain">
						<div className="expanded_about">
							<h3>About</h3>
							<p> {sites[this.props.link]["tabs"][this.state.tab]["description"]} </p>
						</div>
						<div className="tab-selector">
							<div>
									{ this.generate_tab_buttons() }
							</div>
						</div>
						<div className="expanded_html">
							{this.getHTML( this.props.link, this.state.tab )}
						</div>
					</div>
			);

		} else if ( this.props.type === "text" ) {
            // get num of paragraphs
            var par_num = sites[this.props.tag]["par_num"];
            var paragraphs = [];
            for( var i = 0; i < par_num; i++) {
               paragraphs.push( <p>{ sites[this.props.tag]["text"][i] } </p> )
            }

            if( sites[this.props.tag]["img"] === "false" ) {
                return(
                    <div className={ (this.props.mobile == "true" ) ? "expanded_about__mobile" : "expanded_about" } >
                        <h3>{sites[this.props.tag]["name"]}</h3>
                        {paragraphs}
                    </div>
                );
            } else {
                return(
                    <div className="personal-images">
                        <div className="personal-about">
                            {paragraphs}
                        </div>
                        <div className="personal-images">
                
                        </div>
                    </div>
                );
            }
        }
	}
}

export default Tabs;
