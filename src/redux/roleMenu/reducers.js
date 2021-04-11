import actions from './actions';
import initialState from '../../demoData/roleMenu.json';

const { LOAD_ROUTES_BEGIN, LOAD_ROUTES_SUCCESS, LOAD_ROUTES_ERR } = actions;

const initialStateFilter = {
  data: initialState,
  loading: false,
  error: null,
};

const routeMenusReducer = (state = initialStateFilter, action) => {
  const { type, data, err } = action;
  switch (type) {
    case LOAD_ROUTES_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOAD_ROUTES_SUCCESS:
      return {
        ...state,
        data:data,
        loading: false,
      };
    case LOAD_ROUTES_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { routeMenusReducer };
