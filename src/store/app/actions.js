const NS = '@hnClone/app';

export const actionTypes = {
  SET_DATA: `${NS}/SET_DATA`
};

const actions = {
  setTheme: (payload = {}) => ({
    type: actionTypes.SET_DATA,
    payload,
  })
};

export default actions;