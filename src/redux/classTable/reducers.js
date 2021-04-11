import actions from './actions';
//import initialState from '../../demoData/classData.json';

const { LOAD_CLASS_BEGIN, LOAD_CLASS_SUCCESS, LOAD_CLASS_ERR } = actions;

const initialStateFilter = {
  data: [],
  loading: false,
  error: null,
};

const classTableReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case LOAD_CLASS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOAD_CLASS_SUCCESS:
      return {
        ...state,
        data:[...data.data],
        loading: false,
      };
    case LOAD_CLASS_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { classTableReducer };
