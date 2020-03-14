const initialState = {
  count: 0,
};

export const SET_COUNTER_INCREMENT = 'SET_COUNTER_INCREMENT';
export const SET_COUNTER_DECREMENT = 'SET_COUNTER_DECREMENT';

const CounterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_COUNTER_INCREMENT:
      return {
        ...state,
        count: action.data,
      };
    case SET_COUNTER_DECREMENT:
      return {
        ...state,
        count: action.data,
      };
    default:
      return state;
  }
};

export default CounterReducer;
