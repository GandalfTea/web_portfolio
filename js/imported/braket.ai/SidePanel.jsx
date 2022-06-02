import React from 'react';
import { Button } from './General';
import data from '../data.json';

const dataset = data['common-gen'];

const Entry = function (props) {
  return (
    <div className="side-panel_entry">
      <h3>{props.title}</h3>
      <div>{props.content}</div>
    </div>
  );
};

const SidePanel = function (props) {
  const language = <Button type="tag" text={dataset.language} />;
  const homepage = (
    <a href={`https://${dataset.homepage}`}>
      <i>
        <u>{dataset.homepage}</u>
      </i>
    </a>
  );

  const tasks = [];
  const tags = [];

  for (const task in dataset.tasks) {
    tasks.push(<Button type="tag" text={dataset.tasks[task]} />);
  }

  for (const tag in dataset.tags) {
    tags.push(<Button type="tag" text={dataset.tags[tag]} />);
  }

  const about = (
    <div>
      <p>
        <strong>{dataset.entries}</strong> entries
      </p>
      <p>
        {dataset.files} {dataset.files < 2 ? 'file' : 'files'} . <i>{dataset['file-type']}</i> . {dataset['file-size']}
      </p>
      <p>{dataset.licence}</p>
    </div>
  );

  return (
    <div className="side-panel">
      <Entry title="About" content={about} />
      <Entry title="Tasks" content={tasks} />
      <Entry title="Language" content={language} />
      <Entry title="Homepage" content={homepage} />
      <Entry title="Tags" content={tags} />
    </div>
  );
};

export default SidePanel;
