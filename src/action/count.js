// Action types
export const INCREASE_COUNT = 'count/INCREASE_COUNT';

export const SET_COUNT = 'count/SET_COUNT';

// Action creators
export const increaseCount = () => {
  return {
    type: INCREASE_COUNT,
  }
};

export const setCount = () => {
  return {
    type: SET_COUNT,
  }
};