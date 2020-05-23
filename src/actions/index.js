import hackerNewsApi from '../services/hackerApi';

export const actionTypes = {
  FETCH_PAGEDATA: 'FETCH_PAGEDATA',
  FETCH_GRAPHDATA: 'FETCH_GRAPHDATA',
  FETCH_STORYPOINTS: 'FETCH_STORYPOINTS',
  HIDE_STORY: 'HIDE_STORY',
  FETCH_SUCCESS: 'FETCH_SUCCESS'
};

const action = (type, payload) => ({ type, payload })

export const actions = {
  fetchPageData: (payload = {}) => {
    return async dispatch => {
      // dispatch(action(actionTypes.FETCH_PAGEDATA, payload));

      const data = await hackerNewsApi
        .getStoriesByPage(payload);
      const chartData = {
        ids: [],
        points: []
      }
      data.hits.map((item) => {
        chartData.ids.push(item.objectID);
        chartData.points.push(localStorage.getItem(`${item.objectID}points`) || item.points);
        return chartData;
      });
      dispatch(action(actionTypes.FETCH_SUCCESS, { payload, data, chartData }));
    }
  },
  fetchGraphData: (payload = {}) => ({
    type: actionTypes.FETCH_GRAPHDATA,
    pageId: payload
  }),
  fetchStoryPoints: (storyObjectId = {}) => ({
    type: actionTypes.FETCH_STORYPOINTS,
    storyObjectId
  }),
  hideStory: (storyObjectId = {}) => ({
    type: actionTypes.HIDE_STORY,
    storyObjectId
  })
};
