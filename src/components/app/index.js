import React, { useEffect, useState } from 'react';
import hackerNewsApi from '../../services/hackerApi';
import { StoryBody } from '../app/StoryBody';
import { StoryHeader } from '../app/StoryHeader';
import { LineChart } from '../app/linechart';

import '../../styles/styles.css';

export const App = () => {
  const [storyIds, setStoryIds] = useState([]);
  const storyHeader = ['Comments', 'Vote Count','Up Vote', 'News Details'];
  const checkData = (storyIds && storyIds.hits) ? true : false;
  const chartData = {
    ids: [],
    points: []
  };
  if(checkData) {
    storyIds.hits.map((item) => {
      chartData.ids.push(item.objectID);
      chartData.points.push(item.points);
      return chartData;
    });
  }
  
  useEffect(() => {
    hackerNewsApi.getTopStory().then(data => data && setStoryIds(data));
  }, []);

 return (
  <div className='story-container'>
    <table className='hackernews-table table table-striped'>
      <thead className="table-header">
        <tr>
        {storyHeader && storyHeader.map(title => (
          <StoryHeader title={title} key={title}/>
        ))}
        </tr>
      </thead>
      <tbody className="table-body">
      {checkData ? storyIds.hits.map((item) => <StoryBody storyDetails={item}/>) : null}
      </tbody>
    </table>
    <div className="chart-container" style={{position:'relative', height:'100%', width: '100%'}}>
      <canvas id="myChart"></canvas>
    </div>
    {checkData ? <LineChart chartData={chartData}/> : ''}
  </div>
 )
};

