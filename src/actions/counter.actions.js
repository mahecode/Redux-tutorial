import {SET_COUNTER_INCREMENT, SET_COUNTER_DECREMENT} from '../reducers/counter.reducers';

export const incrementCounter = () => (dispatch, getState) => {
  try {  
    let {Counter: {count}} = getState();
    dispatch({
      type: SET_COUNTER_INCREMENT,
      data: ++count
    });
  } catch (error) {
    console.log(error);
  }
};

export const decrementCounter = () => (dispatch, getState) => {
  try {  
    let {Counter: {count}} = getState();

    dispatch({
      type: SET_COUNTER_DECREMENT,
      data: --count
    });
  } catch (error) {
    console.log(error);
  }
}
