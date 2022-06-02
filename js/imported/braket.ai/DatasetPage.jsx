import React from 'react';
//import Header from './Header';
import DatasetCard from './DatasetCard';
import Content from './Content';
import SidePanel from './SidePanel';
//import Footer from './Footer';
import data from '../data.json';

const dataset = data['common-gen'];

class DatasetPage extends React.Component {
  constructor(props) {
    super(props);
		this.state = { width: window.innerWidth };
		this.updateWidth = this.updateWidth.bind(this);
  }
		
	componentWillMount() {
		window.addEventListener('resize', this.updateWidth);
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWidth);
	}

	updateWidth() {
		this.setState({ width: window.innerWidth });
	}

  render() {

		const isMobile = this.state.width <= 1000;
		
    return (
      <div className="paging-imported">
        <DatasetCard
          title={dataset.title}
          description={dataset['card-description']}
          score={dataset.score}
          link={dataset['cdn-link']}
          raddress={dataset.raddress}
        />
        <SidePanel />
        <Content mobile={ (isMobile) ? true : false } />
      </div>
    );
  }
}

export default DatasetPage;
