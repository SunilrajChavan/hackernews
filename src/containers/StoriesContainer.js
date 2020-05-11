import React, { useEffect, useState } from 'react';
import hackerNewsApi from '../services/hackerApi'
import { Story } from '../components/app/Story'
import { StoryHeader } from '../components/app/StoryHeader'

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const storyHeader = ['Comments', 'Vote Count','Up Vote', 'News Details'];

  useEffect(() => {
    hackerNewsApi.getTopStory().then(data => data && setStoryIds(data));
  }, []);

 return (
  <table>
    <thead>
      <tr>
      {storyHeader && storyHeader.map(title => (
        <StoryHeader title={title}/>
      ))}
      </tr>
    </thead>
    {storyIds && storyIds.length && storyIds.hits && (
      <Story storyDetails={storyIds.hits}/>
    )}
  </table>
 )
};

