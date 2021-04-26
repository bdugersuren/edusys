import actions from './actions';
//import initialState from '../../demoData/topicData.json';

const { LOAD_TASK_BEGIN, LOAD_TASK_SUCCESS, LOAD_TASK_ERR,FILTER_TASK_DATAS, CHANGE_SELECTED_SUBJECT_ID ,CHANGE_SELECTED_CLASS_ID, CHECKED_SELECTED_TOPIC_IDS,CHENGE_CHECKED_TASK_ID, SET_CURRENT_PAGE, SET_ALL_CHECK_TASK,DELETE_TASK_SUCCESS, SET_TASK_USER_ID} = actions;

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
  pageSize:10,
  currentPage:1,

};

const taskTableReducer = (state = initialStateFilter, action) => {
  const { type, data} = action;
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
        error: action.err,
        loading: false,
      };
    case CHANGE_SELECTED_SUBJECT_ID:
      return {
        ...state,
        selectedSubjId: action.subjId,
        filteredTasks:[],
        checkedTopicIds:[],
        loading: false,
      };
    case CHANGE_SELECTED_CLASS_ID:
      return {
        ...state,
        selectedClassId: action.clssId,
        filteredTasks:[],
        checkedTopicIds:[],
        loading: false,
      };

    case CHECKED_SELECTED_TOPIC_IDS:
      return {
        ...state,
        checkedTopicIds: action.topicIds,
        //filteredTasks:[...state.filteredTasks.filter(t=>state.list.filter(l=>action.topicIds.include(l.topic_id)).include(t))],
        //selectedTasks: list.map(t=>state.checkedTopicIds.includes(t.topic_id)).length(),
        loading: false,
      };
   case CHENGE_CHECKED_TASK_ID:     
     const {id,isChecked} = action.taskInf;
      return {
        ...state,
        filteredTasks: isChecked?[...state.filteredTasks.filter(t=>t!==id),id]:[...state.filteredTasks.filter(t=>t!==id)],
        loading: false,
      };
         
     case SET_CURRENT_PAGE:     
     return {
        ...state,
        currentPage: action.currentPage,
        loading: false,
      };

     case SET_ALL_CHECK_TASK:     
     //console.log("isOk : ", action.isOk);
     return {
        ...state,
        filteredTasks: action.isOk?[...state.list.filter(t=>state.checkedTopicIds.includes(t.topic_id)).map(tf=>(tf._id))  ]:[],
        loading: false,
      };

     case DELETE_TASK_SUCCESS:     
     //console.log("isOk : ", action.isOk);
     return {
        ...state,
        filteredTasks:[],
        loading: false,
      };
      
     case SET_TASK_USER_ID:     
     return {
        ...state,
        userId:action.id,
        loading: false,
      };



      
    default:
      return state;
  }
};

export { taskTableReducer };

//99455847 цэндээ

