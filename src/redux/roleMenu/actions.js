const actions = {
  LOAD_ROUTES_BEGIN: 'LOAD_ROUTES_BEGIN',
  LOAD_ROUTES_SUCCESS: 'LOAD_ROUTES_SUCCESS',
  LOAD_ROUTES_ERR: 'LOAD_ROUTES_ERR',

  loadRoutesBegin: () => {
    return {
      type: actions.LOAD_ROUTES_BEGIN,
    };
  },

  loadRoutesSuccess: data => {
    return {
      type: actions.LOAD_ROUTES_SUCCESS,
      data,
    };
  },

  loadRoutesErr: err => {
    return {
      type: actions.LOAD_ROUTES_ERR,
      err,
    };
  },
};

export default actions;
