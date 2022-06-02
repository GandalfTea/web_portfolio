import React from 'react';
import data from '../data.json';
import code from '../data-code.json';
import Vote from './Vote';
import { Table } from './General';

const dataset = data['common-gen'];

const Card = function (props) {
  return <div className="card">{props.content}</div>;
};

const ReadMe = function (props) {
  const codes = dataset.description.split('```');
  const code_blocks = [];
  codes.pop();
  if (codes.length % 2 === 0) {
    for (let i = 1; i < codes.length; i + 2) {
      code_blocks.push(codes.splice(i, i + 1));
    }
  }
  const md = dataset.description.split('\n').map((x) => <p>{x}</p>);
	if (props.mobile) return <div className="readme_markdown">{md}</div>
  return <Card content={md} />;
};

const Snippet = function (props) {
  const format = <pre>{JSON.stringify(dataset.preview['0'], undefined, 2)}</pre>;

  const table = <Table data={dataset.preview} />;

	if (props.mobile) return(format, table)
  return (
    <div>
      <Card content={format} />
      <Card content={table} />
    </div>
  );
};

const Code = function (props) {
  // send request to server to get code examples .json
  const cards = [];
  for (const entry of code.code) {
    const card = (
      <div className="code-card">
        <div>
          <a href={entry.link}>
            <i>
              <h3>{entry.name}</h3>
            </i>
          </a>
          <p className="code-author">
            by
            {entry.author}
          </p>
          <p>{entry.description}</p>
        </div>
        <Vote score={entry.score} color="black" />
      </div>
    );
    cards.push(<Card content={card} />);
  }

	if (props.mobile) return( cards.splice(0, 4) )
  return <div>{cards}</div>;
};

/*
const Issues = () = {
	// request issues
}

const Discussion = () => {
	// request discussion
}
*/

export { Card, ReadMe, Snippet, Code };
