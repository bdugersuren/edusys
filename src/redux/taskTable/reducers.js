import actions from './actions';
//import initialState from '../../demoData/topicData.json';

const { LOAD_TASK_BEGIN, LOAD_TASK_SUCCESS, LOAD_TASK_ERR,FILTER_TASK_DATAS } = actions;

const initialStateFilter = {
  tasks: [],
  filteredTasks:[],
  taskTypeId:null,
  userId:null,
  topicId:null,
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
        console.log(data.subject_id, "<=======>", data.class_id);
        return {
          ...state,
          tasks: (data.class_id&&data.subject_id)&&state.tasks.filter(cls=>cls.class_id===data.class_id).filter(sid=>sid.subject_id===data.subject_id),
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
