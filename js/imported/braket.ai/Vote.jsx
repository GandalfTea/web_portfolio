import React from 'react';
import data from '../data.json';

const dataset = data.common_gen;

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPressedUpvote: false, isPressedDownvote: false };
    this.renderImg = this.renderImg.bind(this);
    this.vote = this.vote.bind(this);
  }

  vote(vote) {
    if (vote === 'up' ? !this.state.isPressedUpvote : !this.state.isPressedDownvote) {
      // send request to server
      vote === 'up'
        ? this.setState({ isPressedUpvote: !this.state.isPressedUpvote })
        : this.setState({ isPressedDownvote: !this.state.isPressedDownvote });
      vote === 'up' ? (data['common-gen'].score += 1) : (data['common-gen'].score -= 1);
      // check for conflicts
      if (vote === 'up' ? this.state.isPressedDownvote : this.state.isPressedUpvote) {
        vote === 'up'
          ? this.setState({ isPressedDownvote: !this.state.isPressedDownvote })
          : this.setState({ isPressedUpvote: !this.state.isPressedUpvote });
        vote === 'up' ? (data['common-gen'].score += 1) : (data['common-gen'].score -= 1);
      }
      return;
    }
    // send request to cancel the vote
    vote === 'up'
      ? this.setState({ isPressedUpvote: !this.state.isPressedUpvote })
      : this.setState({ isPressedDownvote: !this.state.isPressedDownvote });
    vote === 'up' ? (data['common-gen'].score -= 1) : (data['common-gen'].score += 1);
    if (vote === 'up' ? this.state.isPressedDownvote : this.state.isPressedUpvote) {
      vote === 'up'
        ? this.setState({ isPressedDownvote: !this.state.isPressedDownvote })
        : this.setState({ isPressedUpvote: !this.state.isPressedUpvote });
      vote === 'up' ? (data['common-gen'].score += 1) : (data['common-gen'].score -= 1);
    }
  }

  renderImg(orientation, color = 'white') {
    const vote = orientation === 'upvote' ? this.state.isPressedUpvote : this.state.isPressedDownvote;
    let vimg = '';
    if (color === 'black') {
      vimg = vote ? './js/imported/braket.ai/assets/vote-black_pressed.svg' : './js/imported/braket.ai/assets/vote-black.svg';
    } else {
      vimg = vote ? './js/imported/braket.ai/assets/vote_pressed.svg' : './js/imported/braket.ai/assets/vote.svg';
    }
    return <img src={vimg} alt={orientation} className={orientation} />;
  }

  render() {
    return (
      <div className="card-vote">
        <button type="button" className="score_button" onClick={this.vote.bind(this, 'up')}>
          {this.renderImg('upvote', this.props.color ? this.props.color : 'white')}
        </button>
        <button type="button" className="score_button" onClick={this.vote.bind(this, 'down')}>
          {this.renderImg('downvote', this.props.color ? this.props.color : 'white')}
        </button>
        <p>{this.props.score}</p>
      </div>
    );
  }
}

export default Vote;
