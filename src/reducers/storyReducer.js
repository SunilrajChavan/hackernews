import { actionTypes } from '../actions';

const getInitialState = () => ({
  response: {
    pageNumber: 1,
    chartData: {},
    data: {}
  }
});

const app = (state = getInitialState(), {type, payload}) => {
  switch (type) {
    case actionTypes.FETCH_PAGEDATA:
      return {
        ...state
      }
    case actionTypes.FETCH_SUCCESS:
        return {
          ...state,
          response: {
            pageNumber: payload,
            chartData: payload.chartData,
            data: payload.data
          }
        }
    case actionTypes.FETCH_GRAPHDATA:
      return {
        ...state,
        chartData: payload.chartData
      }
    case actionTypes.FETCH_STORYPOINTS:
      return {
        ...state
      }
      default:
        return state;
  }
};

export default app;