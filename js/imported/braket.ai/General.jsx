import React from 'react';

const Button = function (props) {
  if (props.type === 'full') {
    // Button with white background
    return (
      <button type="button" className="button">
        <p>{props.text}</p>
      </button>
    );
  }
  if (props.type === 'border') {
    // Button with bordered background and transparent interior
    return (
      <button type="button" className="button-border">
        <p>{props.text}</p>
      </button>
    );
  }
  if (props.type === 'tag') {
    // Button with black background
    return (
      <button type="button" className="button-tag">
        <p>{props.text}</p>
      </button>
    );
  }
  if (props.type === 'none') {
    // Button with no margin
    let classes = 'button-none';
    props.clicked === true ? (classes += ' button-none__clicked') : (classes += '');
    return (
      <button type="button" className={classes} onClick={props.onClick}>
        <p>{props.text}</p>
      </button>
    );
  }

  return (
    <button type="button" className="button-border">
      <p>{props.text}</p>
    </button>
  );
};

const CodeSegment = function (props) {
  return (
    <div className="code-segment">
      <p>{props.content}</p>
    </div>
  );
};

const Table = function (props) {
  let table = [];
  const table_entries = [];
  const columns = [];
  let elements = [];

  for (const i in props.data) {
    table_entries.push(props.data[i]);
  }
  for (const column in table_entries[0]) {
    columns.push(column);
  }

  table.push(
    <tr>
      {columns.map((x) => (
        <th>{x}</th>
      ))}
    </tr>
  );
  table.push(
    <tr>
      {columns.map((x) => (
        <td>
          <i>{typeof x}</i>
        </td>
      ))}
    </tr>
  );

  for (const entry of table_entries) {
    let log = [];
    for (const column of columns) {
      if (Array.isArray(entry[column])) {
        for (const elm of entry[column]) {
          elements.push(elm);
        }
        elements = elements.map((x) => `${x},  `);
        log.push(elements);
        elements = [];
      } else {
        log.push(entry[column]);
      }
    }
    log = log.map((x) => <td> {x} </td>);
    table.push(<tr>{log}</tr>);
  }
  return (table = (
    <table className="data-table" align="center">
      {table}
    </table>
  ));
};

export { Button, Table };
