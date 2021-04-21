import actions from './actions';
//import initialState from '../../demoData/topicData.json';
import axios from "../../utility/axios";

const { loadTaskBegin, loadTaskSuccess, loadTaskErr, changeSelectedSubjectId, changeSelectClassId, changeCheckedTopicIds , changeCheckedTaskId} = actions;

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

const changeSelSubjectId = (subjId) => {
  return async dispatch => {
    try {
      dispatch(loadTaskBegin());

      dispatch(changeSelectedSubjectId(subjId));

    } catch (err) {
      dispatch(loadTaskErr(err));
    }
  };
};

const changeSelClassId = (clssId) => {
  return async dispatch => {
    try {
      dispatch(loadTaskBegin());

      dispatch(changeSelectClassId(clssId));

    } catch (err) {
      dispatch(loadTaskErr(err));
    }
  };
};

const changeTopicIds = (topicIds) => {
  return async dispatch => {
    try {
      dispatch(loadTaskBegin());

      dispatch(changeCheckedTopicIds(topicIds));

    } catch (err) {
      dispatch(loadTaskErr(err));
    }
  };
};

const changeCheckedTasks = (taskInf) => {
  return async dispatch => {
    try {
      dispatch(loadTaskBegin());

      dispatch(changeCheckedTaskId(taskInf));

    } catch (err) {
      dispatch(loadTaskErr(err));
    }
  };
};



export { loadTaskDatas, filterTaskDatas, addFullTaskData , changeSelSubjectId, changeSelClassId, changeTopicIds, changeCheckedTasks};
