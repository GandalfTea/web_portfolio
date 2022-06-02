import React from 'react';
import Vote from './Vote';
import BuyOptions from './BuyOptions';
import { Button, Table } from './General';

class DatasetSearchCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: 'data' };
    this.renderContent = this.renderContent.bind(this);
    this.changeContent = this.changeContent.bind(this);
  }

  changeContent(cont) {
    console.log(cont);
    this.setState({ content: cont });
  }

  renderContent() {
    if (this.state.content === 'data') {
      return <Table data={this.props.data} />;
    }
    if (this.state.content === 'snippet') {
      return <pre>{JSON.stringify(this.props.snippet, undefined, 2)}</pre>;
    }
    if (this.state.content === 'licence') {
      return <p>{this.props.licence}</p>;
    }
    console.log('Error: changeContent() argument is invalid. DatasetSearchCard.jsx.');
    return <p>{this.state.data}</p>;
  }

  render() {
    let tags = [];
    for (const tag in this.props.tags) {
      tags.push(this.props.tags[tag]);
    }
    tags = tags.map((x) => <Button type="tag" text={x} />);

    return (
      <div className="dataset-search-card">
        <div className="dataset-search-card__main">
          <div className="dataset-search-card__details">
            <Vote score={this.props.score} />
            <button className="details__options">
              <img src="./js/imported/braket.ai/assets/three-dots.svg" />
            </button>
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
            <div className="dataset-search-card__buy-options">
              <BuyOptions />
              <Button type="border" text="Buy" />
            </div>
          </div>
          <div className="dataset-search-card__content">
            <div className="dataset-search-card__menu">
              <button
                onClick={() => this.changeContent('data')}
                className={this.state.content === 'data' ? 'dataset-search-card__button__pressed' : ''}
              >
                <p>Data</p>
              </button>
              <button
                onClick={() => this.changeContent('snippet')}
                className={this.state.content === 'snippet' ? 'dataset-search-card__button__pressed' : ''}
              >
                <p>Data Snippet</p>
              </button>
              <button
                onClick={() => this.changeContent('licence')}
                className={this.state.content === 'licence' ? 'dataset-search-card__button__pressed' : ''}
              >
                <p>Licence</p>
              </button>
            </div>
            <div className="dataset-search-card__data">{this.renderContent()}</div>
          </div>
        </div>
        <div className="dataset-search-card__tags">{tags}</div>
      </div>
    );
  }
}

export default DatasetSearchCard;
