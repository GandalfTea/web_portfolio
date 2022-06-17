import React from 'react';
import { Button } from './General';
import BuyOptions from './BuyOptions';
import Vote from './Vote';

class DatasetCard extends React.Component {
  constructor(props) {
    super(props);
  }

  // is object because I want to live update the upvotes

  render() {
    const address = [];
    const raddress = this.props.raddress.split(' / ');
    for (const element in raddress) {
      address.push(<a href="">{raddress[element]} / </a>);
    }

    return (
      <div className="card-address">
        <div className="relative-address">
          {address} <strong>{this.props.title}</strong>
        </div>
        <div className="dataset-card">
          <h2>{this.props.title}</h2>
          <h3>{this.props.description}</h3>
          <Vote score={this.props.score} />
          <div className="bottom">
            <button
              onClick={() => {
                navigator.clipboard.writeText(this.props.link);
              }}
              className="link-background"
            >
              <p>{this.props.link}</p>
              <img src="./js/imported/braket.ai/assets/clipboard.svg" alt="copy to clipboard" className="link-copy" />
            </button>

            <BuyOptions />
            <div className="buy">
              <Button type="full" text="Buy" />
            </div>
            <Button type="border" text="Test" />
          </div>
        </div>
      </div>
    );
  }
}

export default DatasetCard;
