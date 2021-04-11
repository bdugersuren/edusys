import actions from './actions';
//import initialState from '../../demoData/subjectData.json';

const { LOAD_SUBJECT_BEGIN, LOAD_SUBJECT_SUCCESS, LOAD_SUBJECTSS_ERR } = actions;

const initialStateFilter = {
  data: [],
  loading: false,
  error: null,
};

const subjectTableReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case LOAD_SUBJECT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUBJECT_SUCCESS:
      //console.log("++++++++++++++++++++++++++++",data);
      return {
        ...state,
        data: [...data.data],
        loading: false,
      };
    case LOAD_SUBJECTSS_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { subjectTableReducer };
