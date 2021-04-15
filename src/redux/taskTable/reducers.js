import actions from './actions';
//import initialState from '../../demoData/topicData.json';

const { LOAD_TASK_BEGIN, LOAD_TASK_SUCCESS, LOAD_TASK_ERR,FILTER_TASK_DATAS } = actions;

const initialStateFilter = {
  tasks: [],
  filteredTasks:[],
  topicIds:[],
  taskTypeId:null,
  userId:null,
  taskLevelId:null,
  loading: false,
  error: null,
};

const taskTableReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case LOAD_TASK_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOAD_TASK_SUCCESS:
      return {
        ...state,
        tasks:[...data.data],
        loading: false,
      };
      case FILTER_TASK_DATAS:
        return {
          ...state,
          loading: false,
        };
    case LOAD_TASK_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { taskTableReducer };
