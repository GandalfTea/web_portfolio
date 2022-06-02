import React from 'react';
import { Card, ReadMe, Snippet, Code } from './ContentCard';
import { Button } from './General';

class MobileContentCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { collapsed: false };
	}

	render() {
		return (
			<div className="mobile-content-card">
				<div className="mobile-content-card__top">
					<h3>{this.props.title}</h3>
					<button 
							className= { (this.state.collapsed) ? "mobile-collapse" : "mobile-collapse-opened"} 
							onClick={ () => this.setState({ collapsed: !this.state.collapsed })}>
		
							<img src='./js/imported/braket.ai/assets/arrow.svg' alt="collapse card" />
					</button>
				</div>
				{(!this.state.collapsed) ? this.props.content : null}
			</div>
		);
	}
}


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageDisplay: 'Snippet' };
    this.displayPage = this.displayPage.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(update) {
    if (update === '') {
      console.log('ERROR: updateState() empty argument. ');
    }
    this.setState({ pageDisplay: update });
  }

  displayPage(page) {
		if (this.props.mobile) {
			return(
				<div>
					<MobileContentCard title="Description" content={ <ReadMe mobile={true} /> } />
					<MobileContentCard title="Data Snippet" content={ <div className="mobile-table"><Snippet mobile={true} /></div> } />
					<div className="code-mobile">
						<h3>Code</h3>
						<Code mobile={true} />

					</div>
				</div>
			)
		}


    // maybe do information sanity check before display?
    switch (page) {
      case 'ReadMe':
        return <ReadMe />;
      case 'Snippet':
        return <Snippet />;
      case 'Code':
        return <Code />;
      /* 	case "Issues":
				return <Issues />
			case "Discussion":
				return <Discussion /> */
      default:
        console.log('ERROR: Content displayPage failed to update: bad argument. ');
        return <ReadMe />;
    }
  }

  render() {
		if (this.props.mobile) {
			return (
					this.displayPage(this.state.pageDisplay)
			)
		}
    return (
      <div className="content">
        <div className="content-buttons">
          <Button
            type="none"
            text="Description"
            clicked={this.state.pageDisplay === 'ReadMe'}
            onClick={this.updateState.bind(this, 'ReadMe')}
          />
          <Button
            type="none"
            text="Data Snippet"
            clicked={this.state.pageDisplay === 'Snippet'}
            onClick={this.updateState.bind(this, 'Snippet')}
          />
          <Button
            type="none"
            text="Code"
            clicked={this.state.pageDisplay === 'Code'}
            onClick={this.updateState.bind(this, 'Code')}
          />
          <Button
            type="none"
            text="Issues"
            clicked={this.state.pageDisplay === 'Issues'}
            onClick={this.updateState.bind(this, 'Issues')}
          />
          <Button
            type="none"
            text="Discussion"
            clicked={this.state.pageDisplay === 'Discussion'}
            onClick={this.updateState.bind(this, 'Discussion')}
          />
        </div>
        {this.displayPage(this.state.pageDisplay)}
      </div>
    );
  }
}

export default Content;
