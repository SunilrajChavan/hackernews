import React, { useEffect, useState } from 'react';
import hackerNewsApi from '../../services/hackerApi';
import { StoryBody } from '../app/StoryBody';
import { StoryHeader } from '../app/StoryHeader';
import { LineChart } from '../app/linechart';

import '../../styles/styles.css';

export const App = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [pageNumber, setPage] = useState((document.location.hash ? document.location.hash.split('#pageId=')[1] : 1) || 1);
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
    hackerNewsApi.getStoriesByPage(pageNumber).then(data => data && setStoryIds(data));
  }, [pageNumber]);

  const goPrevious = (event) => {
    if(pageNumber <= 1) {
      return false;
    } else {
      setPage(parseInt(pageNumber) - 1);
      document.location.hash = `#pageId=${parseInt(pageNumber) - 1}`;
    }
  };

  const goNext = (event) => {
    if(pageNumber >= 1) {
      setPage(parseInt(pageNumber) + 1);
      document.location.hash = `#pageId=${parseInt(pageNumber) + 1}`;
    } else {
      return false;
    }
  };

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
      {checkData ? storyIds.hits.map((item) => <StoryBody key={item.objectID} storyDetails={item}/>) : null}
      </tbody>
    </table>
    <div>
      <button onClick={goPrevious}>Previous</button>
      <button onClick={goNext}>Next</button>
    </div>
    <div className="chart-container" style={{position:'relative', height:'100%', width: '100%'}}>
      <canvas id="myChart"></canvas>
    </div>
    {checkData ? <LineChart chartData={chartData}/> : ''}
  </div>
 )
};

