import React from 'react';

export const Story = ({ storyDetails }) => {
  const { num_comments, title, url, points } = storyDetails;
  return (
    <tbody><tr>{num_comments}</tr></tbody>
  );
};
