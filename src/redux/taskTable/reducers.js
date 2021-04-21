import { list } from 'postcss';
import actions from './actions';
//import initialState from '../../demoData/topicData.json';

const { LOAD_TASK_BEGIN, LOAD_TASK_SUCCESS, LOAD_TASK_ERR,FILTER_TASK_DATAS, CHANGE_SELECTED_SUBJECT_ID ,CHANGE_SELECTED_CLASS_ID, CHECKED_SELECTED_TOPIC_IDS,CHENGE_CHECKED_TASK_ID} = actions;

const initialStateFilter = {
  list: [],
  filteredTasks:[],
  selectedSubjId:null,
  selectedClassId:null,
  checkedTopicIds:[],
  userId:null,
  selectedTasks:0,
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
        list:[...data.data],
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
    case CHANGE_SELECTED_SUBJECT_ID:
      return {
        ...state,
        selectedSubjId: action.subjId,
        loading: false,
      };
    case CHANGE_SELECTED_CLASS_ID:
      return {
        ...state,
        selectedClassId: action.clssId,
        loading: false,
      };

    case CHECKED_SELECTED_TOPIC_IDS:
      return {
        ...state,
        checkedTopicIds: action.topicIds,
        //selectedTasks: list.map(t=>state.checkedTopicIds.includes(t.topic_id)).length(),
        loading: false,
      };
   case CHENGE_CHECKED_TASK_ID:
     
     const {id,isChecked, err} = action.taskInf;
     console.log("000000000000000000000000> ",id,isChecked);
      return {
        ...state,
        filteredTasks: isChecked?[...state.filteredTasks,id]:[...state.filteredTasks.filter(t=>t!==id)],
        loading: false,
      };
      
    default:
      return state;
  }
};

export { taskTableReducer };
