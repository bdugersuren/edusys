import actions from './actions';
//import initialState from '../../demoData/topicData.json';
import axios from "../../utility/axios";

const { loadTaskBegin, loadTaskSuccess, loadTaskErr } = actions;

const loadTaskDatas = () => {
  return async dispatch => {
    try {
      dispatch(loadTaskBegin());

      await axios.get("tasks?limit=100").then(({ data }) => {
        return dispatch(loadTaskSuccess(data));
      });
      
      //dispatch(loadTopicSuccess(initialState));
    } catch (err) {
      dispatch(loadTaskErr(err));
    }
  };
};

const addFullTaskData = (taskData) => {
  return async dispatch => {
    try {
      dispatch(loadTaskBegin());

      await axios.post("tasks/full", taskData).then(({ data }) => {
        return dispatch(loadTaskSuccess(data));
      });

      //dispatch(filterTaskDatas(topicIds));

    } catch (err) {
      dispatch(loadTaskErr(err));
    }
  };
};

const filterTaskDatas = (topicIds) => {
  return async dispatch => {
    try {
      dispatch(loadTaskBegin());

      dispatch(filterTaskDatas(topicIds));

    } catch (err) {
      dispatch(loadTaskErr(err));
    }
  };
};


export { loadTaskDatas, filterTaskDatas, addFullTaskData };
