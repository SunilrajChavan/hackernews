/* global URL*/
import React, { useEffect, useState } from 'react';

export const StoryBody = ({ storyDetails }) => {
  const {
    author,
    created_at,
    num_comments,
    objectID,
    points,
    title,
    url
  } = storyDetails;

  const [value, setValue] = useState(
    localStorage.getItem(`${objectID}points`) || points
  );

  const [hide, setHide] = useState(
    localStorage.getItem(`${objectID}hide`) || 'show'
  );

  useEffect(() => {
    localStorage.setItem(`${objectID}points`, value);
  }, [objectID, value]);

  useEffect(() => {
    localStorage.setItem(`${objectID}hide`, hide);
  }, [objectID, hide]);

  let hostname = url ? (new URL(url).origin) : '';
  const postedAt = Math.floor((new Date() - new Date(created_at)) / 36e5);
  const increasePoints = event => setValue(parseInt(value) + 1);
  const hideStory = event => setHide('hidden');

  return <tr key={objectID} className={`text-body ${hide}`}>
    <td>{num_comments}</td>
    <td>{value}</td>
    <td><span className="arrow-up" data-count={value} onClick={increasePoints}></span></td>
    <td>
      <span className="story-title">{title} </span>
      <span className="story-url"><a href={url}>({hostname})</a></span>
      <span className="story-author text-secondary"> by 
        <span className="text-body"> {author} </span>
      </span>
      <span className="text-secondary">{postedAt} hours ago</span>
      <span className="hide-story" onClick={hideStory}> [hide] </span>
    </td>
    </tr>;
};
