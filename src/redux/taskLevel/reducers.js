import actions from './actions';
//import initialState from '../../demoData/classData.json';

const { LOAD_TASK_LEVEL_BEGIN, LOAD_TASK_LEVEL_SUCCESS, LOAD_TASK_LEVEL_ERR } = actions;

const initialStateFilter = {
  list: [],
  loading: false,
  error: null,
};

const taskLevelReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case LOAD_TASK_LEVEL_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOAD_TASK_LEVEL_SUCCESS:
      return {
        ...state,
        list:[...data.data],
        loading: false,
      };
    case LOAD_TASK_LEVEL_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { taskLevelReducer };
