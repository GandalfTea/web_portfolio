import React from 'react';
import { render } from 'react-dom';
import news from '../news.json';
import { Button } from './General';
import Vote from './Vote';
import DatasetSearchCard from './DatasetSearchCard';
//import Footer from "./Footer";

const Entry = function (props) {
  return (
    <div className="entry">
      <button className="entry-button">
        <img src="./js/imported/braket.ai/assets/close.svg" />
      </button>
      {props.content}
    </div>
  );
};

// move to general ?
const Notification = function (props) {
  return (
    <div className="simple-notification">
      <p className="simple-notification-message">{props.message}</p>
    </div>
  );
};

const ContributionUpdate = function (props) {
  const message = [];
  message.push(<p className="contribution-update__main">Contribution {props.result}.</p>);
  message.push(<p className="contribution-update__ticket">{props.ticket}</p>);

  return <Notification message={message} />;
};

class MessagePrompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }

  render() {
    if (this.state.opened) {
      return (
        <div>
          <div className="message-body">
            <div className="message-body__title">
              <h3>{this.props.title}</h3>
              <p>{this.props.author}</p>
            </div>
            <p>{this.props.message}</p>
          </div>
          <div className="message__opened">
            <textarea
              autoFocus
              className="message-input__opened"
              onBlur={() => this.setState({ opened: !this.state.opened })}
            />
            <div className="message-buttons">
              <button className="message-input__add-file">
                <img src="./js/imported/braket.ai/assets/plus.svg" />
              </button>
              <div>
                <button className="message-input__add-file">
                  <img src="./js/imported/braket.ai/assets/plus.svg" />
                </button>
                <button className="message-input__add-file">
                  <img src="./js/imported/braket.ai/assets/plus.svg" />
                </button>
                <button className="message-input__add-file">
                  <img src="./js/imported/braket.ai/assets/plus.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="message-body">
          <div className="message-body__title">
            <h3>{this.props.title}</h3>
            <p>{this.props.author}</p>
          </div>
          <p>{this.props.message}</p>
        </div>
        <input type="text" className="message-input" onFocus={() => this.setState({ opened: !this.state.opened })} />
      </div>
    );
  }
}

// New Comment on Own Post Prompt

// move this to General
class Comment extends React.Component {
	constructor(props) {
		super(props);
		this.state = { reply: false };
		this.openReply = this.openReply.bind(this);
	}

	openReply() {
		if (this.state.reply) {
			return (
				<div className="comment-reply">
					<textarea autoFocus placeholder={"Reply to " + this.props.author} onBlur={ () => this.setState({ reply: !this.state.reply})}></textarea>
				</div>
			)
		}
	}

	render() {
  	const level = this.props.level;
  	return (
   	 <div className={'comment ' + `comment-${level}`}>
   	   <div className="line-body">
   	     <div className="comment-line" />
   	     <div className="comment-body">
   	       <h3>{this.props.author}</h3>
   	       <p>{this.props.message}</p>
   	     </div>
   	   </div>
    	  <div className="comment-bottom">
   	     <button className="comment-reply-button" onClick={ () => this.setState({ reply: !this.state.reply}) }> Reply </button>
   	     <Vote color="black" score={this.props.score} />
   	   </div>
			 {this.openReply()}
   	 </div>
  	);
	}
};

var CommentPrompt = function (props) {
  const stack = [];
  const current_level = props.level;
  const { comments } = props;
  for (let idx = 0; idx < comments.length; idx++) {
    stack.push(
      <Comment
        level={current_level}
        author={comments[idx].author}
        message={comments[idx].message}
        score={comments[idx].score}
      />
    );
    if (comments[idx].replies != 'none') {
      if (Array.isArray(comments[idx].replies)) {
        stack.push(CommentPrompt({ comments: comments[idx].replies, level: current_level + 1 })); // why on all hell does this now work with increment
      } else {
        stack.push(
          <Comment
            level={current_level + 1}
            author={comments[idx].replies.author}
            message={comments[idx].replies.message}
            score={comments[idx].replies.score}
          />
        );
      }
    }
  }

  if (current_level === 1) {
    return (
      <div className="comment-prompt">
        <div className="comment-prompt__original-message">
          <h3>{props.original}</h3>
          <p> by you </p>
        </div>
        {stack}
      </div>
    );
  }
  return stack;
};

const RequestPrompt = function (props) {
  return (
    <div className="request">
      <h3>{props.title}</h3>
      <p>{props.message}</p>
      <div className="request-bottom">
        <div>
          <p>
            <strong>{props.num} requests</strong>
          </p>
          <p>
            <strong>Task:</strong> {props.task}
          </p>
          <p>
            <strong>Deadline:</strong> {props.deadline}
          </p>
        </div>
        <div className="request-buttons">
          <Button type="full" text="Accept" />
          <Button type="outline" text="Decline" />
        </div>
      </div>
    </div>
  );
};

const Challange = function (props) {
  return (
    <div className="challange">
      <h3>{props.title}</h3>
      <p>{props.message}</p>
      <div>
        <p>{props.attempts} attempts</p>
        <Button type="outline" text="More" />
        <Button type="tag" text="Participate" />
      </div>
    </div>
  );
};

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, news: false };
  }

  getNews() {
    // contact server and get news JSON
    return 0;
  }

  checkLogin() {
    // check if the person is logged in by browser storage
    return true;
  }

  render() {
    // Personal News
    if (news.news != 'none' && this.checkLogin()) {
      var news_ui = [];
      for (const i of news.news) {
        switch (i.type) {
          case 'contribution-update':
            news_ui.push(<Entry content={<ContributionUpdate result={i.result} ticket={i.ticket} />} />);
            break;
          case 'message':
            news_ui.push(<Entry content={<MessagePrompt title={i.title} author={i.author} message={i.message} />} />);
            break;
          case 'comment':
            news_ui.push(<Entry content={<CommentPrompt level={1} original={i.original} comments={i.replies} />} />);
            break;
          case 'request':
            news_ui.push(
              <Entry
                content={
                  <RequestPrompt
                    title={i.workforce}
                    message={i.message}
                    num={i.num}
                    task={i.task}
                    deadline={i.deadline}
                  />
                }
              />
            );
            break;
        }
      }
    }

    const challanges = [];
    for (const i of news.challanges) {
      challanges.push(<Challange title={i.name} message={i.description} attempts={i.attempts} />);
    }

    const datasets = [];
    for (const i of news.datasets) {
      datasets.push(
        <DatasetSearchCard
          name={i.name}
          description={i.description}
          data={i.data}
          snippet={i.data[0]}
          licence={i.licence}
          tags={i.tags}
          score={i.score}
        />
      );
    }

    // Popular News
    // get popular challanges and datasets

    return (
      <div>
        <img src="../assets/avatar-dummy.svg" alt="avatar" className="avatar" />
        <img src="../assets/logo.svg" className="logo-landing" />
        <input type="search" className="landing-search search" />
        <h3 className="news">While you were gone</h3>
        {news_ui}
        <div className="challanges">
          <h3 className="challanges-title">Popular Challanges</h3>
          {challanges}
          <Button type="full" text="More" />
        </div>
        <div className="popular-datasets">
          <h3>Popular Datasets</h3>
          {datasets}
          <div className="popular-more">
            <Button type="tag" text="More" />
          </div>
        </div>
	<Footer type="simple" />
      </div>
    );
  }
}

//render(<Landing />, document.getElementById('landing'));
export { Entry, news, CommentPrompt, MessagePrompt, Notification, RequestPrompt,  ContributionUpdate };
