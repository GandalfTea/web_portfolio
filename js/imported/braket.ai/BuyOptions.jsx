import React from 'react';
import data from '../data.json';

const dataset = data['common-gen'];

class BuyOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpened: false, selectedOption: 'full dataset' };
    this.changeOption = this.changeOption.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.changeMenu = this.changeMenu.bind(this);
  }

  changeMenu() {
    this.setState({ menuOpened: !this.state.menuOpened });
  }

  changeOption(option) {
    if (typeof option !== 'string') {
      console.log('ERROR: changeOption() argument is not a string. In BuyOptions.jsx. Argument is ', option);
      this.setState({ menuOpened: !this.state.menuOpened });
      return;
    }
    this.setState({ selectedOption: option });
    this.setState({ menuOpened: !this.state.menuOpened });
  }

  renderMenu(opened) {
    let options = [];
    for (const i in dataset['price-options']) {
      if (dataset['price-options'][i][1]) {
        for (const i in dataset['price-options'][i]) {
        }
      }
      options.push(i);
    }
    options = options.map((x) => (
      <button className="buy_button" onClick={this.changeOption.bind('full dataset')}>
        {x}
      </button>
    ));

    if (opened) {
      return <div className="buy-options__menu">{options}</div>;
    }
  }

  render() {
    return (
      <div className="buy-options">
        <div className="buy-display">
          <h3>{this.state.selectedOption}</h3>
          <button onClick={this.changeMenu}>
            <img src="./js/imported/braket.ai/assets/menu-arrow.svg" />
          </button>
        </div>
        <h1>$30</h1>
        {this.renderMenu(this.state.menuOpened)}
      </div>
    );
  }
}

export default BuyOptions;
