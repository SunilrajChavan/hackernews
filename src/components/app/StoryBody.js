import React from 'react';

export const StoryBody = ({ storyDetails }) => {
  const { num_comments, title, url, points } = storyDetails;

  return <tr><td>{num_comments}</td><td>{points}</td><td>{title}</td><td>{url}</td></tr>;
};
