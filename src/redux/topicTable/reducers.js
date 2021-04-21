import actions from './actions';
//import initialState from '../../demoData/topicData.json';

const { LOAD_TOPIC_BEGIN, LOAD_TOPIC_SUCCESS, LOAD_TOPIC_ERR,FILTER_TOPIC_DATAS } = actions;

const initialStateFilter = {
  list: [],
  loading: false,
  error: null,
};

const topicTableReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case LOAD_TOPIC_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOAD_TOPIC_SUCCESS:
      return {
        ...state,
        list:[...data.data],
        loading: false,
      };
      case FILTER_TOPIC_DATAS:
        console.log(data.subject_id, "<=======>", data.class_id);
        return {
          ...state,
          list: (data.class_id&&data.subject_id)&&state.topics.filter(cls=>cls.class_id===data.class_id).filter(sid=>sid.subject_id===data.subject_id),
          loading: false,
        };
    case LOAD_TOPIC_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { topicTableReducer };
