const actions = {
  LOAD_CLASS_BEGIN: 'LOAD_CLASS_BEGIN',
  LOAD_CLASS_SUCCESS: 'LOAD_CLASS_SUCCESS',
  LOAD_CLASS_ERR: 'LOAD_CLASS_ERR',

  loadClassBegin: () => {
    return {
      type: actions.LOAD_CLASS_BEGIN,
    };
  },

  loadClassSuccess: data => {
    return {
      type: actions.LOAD_CLASS_SUCCESS,
      data,
    };
  },

  loadClassErr: err => {
    return {
      type: actions.LOAD_CLASS_ERR,
      err,
    };
  },
};

export default actions;
