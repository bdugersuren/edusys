import actions from './actions';
//import initialState from '../../demoData/topicData.json';
import axios from "../../utility/axios";
//import {useSelector} from 'react-redux';


const { loadTaskBegin, loadTaskSuccess, loadTaskErr, changeSelectedSubjectId, changeSelectClassId, changeCheckedTopicIds , changeCheckedTaskId, setCurrentPage, setAllCheckTask, deleteTaskSuccess, setTaskUserId} = actions;

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

const changeCurrentPage = (currentPage) => {
  return async dispatch => {
    try {
      dispatch(loadTaskBegin());

      dispatch(setCurrentPage(currentPage));

    } catch (err) {
      dispatch(loadTaskErr(err));
    }
  };
};

const setAllCheckTasks = (isOk) => {
  return async dispatch => {
    try {
      dispatch(loadTaskBegin());

      dispatch(setAllCheckTask(isOk));

    } catch (err) {
      dispatch(loadTaskErr(err));
    }
  };
};


const delTask = (id) => {
  return async dispatch => {
    //const token = useSelector((state) => state.auth.login.token);
    try {
      dispatch(loadTaskBegin());
      const token = localStorage.getItem('lms-token');
      const del_url='tasks/'+id.toString();
      console.log(token,"~~~~~~~~~~~~~~~~~>",del_url);
      await axios.delete(del_url, {
        headers:{
          'Authorization': token
        }
      }).then(({ data }) => {
        return dispatch(deleteTaskSuccess(data));
        
      });

    } catch (err) {
      dispatch(loadTaskErr(err));
    }
  };
};

const setTaskUser = (id) => {
  return async dispatch => {
    try {
      dispatch(loadTaskBegin());
      dispatch(setTaskUserId(id));
    } catch (err) {
      dispatch(loadTaskErr(err));
    }
  };
};

export { loadTaskDatas, filterTaskDatas, addFullTaskData , changeSelSubjectId, changeSelClassId, changeTopicIds, changeCheckedTasks, changeCurrentPage, setAllCheckTasks,delTask, setTaskUser};
