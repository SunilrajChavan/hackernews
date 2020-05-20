/* global URL*/
import React from 'react';

export const StoryBody = ({ storyDetails }) => {
  const {
    author,
    num_comments,
    objectID,
    points,
    title,
    url
  } = storyDetails;
  
  let hostname = url ? (new URL(url).origin) : '';

  return <tr className="text-body">
    <td>{num_comments}</td>
    <td>{points}</td>
    <td><span className="arrow-up" key={objectID}></span></td>
    <td>
      <span className="story-title">{title} </span>
      <span className="story-url"><a href={url}>({hostname})</a></span>
      <span className="story-author text-secondary"> by 
        <span className="text-body"> {author} </span>
      </span>
      <span className="text-secondary">5 hours ago</span>
      <span className="hide-story"> [ hide ] </span>
    </td>
    </tr>;
};
