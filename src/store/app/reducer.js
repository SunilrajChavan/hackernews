import {
  actionTypes
} from './actions';

const getInitialState = () => ({
  data: {}
});

const app = (state = getInitialState(), {
  type,
  payload
}) => {
  switch (type) {
    case actionTypes.SET_DATA:
      return {
        ...state,
        ...payload
      }
      default:
        return state;
  }
};

export default app;