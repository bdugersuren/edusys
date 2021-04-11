import actions from './actions';
import initialState from '../../demoData/roleMenu.json';

const { loadRoutesBegin, loadRoutesSuccess, loadRoutesErr } = actions;

const loadRouteMenus = () => {
  return async dispatch => {
    try {
      dispatch(loadRoutesBegin());
      dispatch(loadRoutesSuccess(initialState));
    } catch (err) {
      dispatch(loadRoutesErr(err));
    }
  };
};

export { loadRouteMenus };
