import actions from './actions';
import axios from "../../utility/axios";

const { loadTaskLevelBegin, loadTaskLevelSuccess, loadTaskLevelErr } = actions;

const loadTaskLevelDatas = () => {
  return async dispatch => {
    try {
      dispatch(loadTaskLevelBegin());
      
      await axios.get("tasklevels").then(({ data }) => {
        return dispatch(loadTaskLevelSuccess(data));
      });

     // dispatch(loadClassSuccess(initialState))
    } catch (err) {
      dispatch(loadTaskLevelErr(err));
    }
  };
};

export { loadTaskLevelDatas };
