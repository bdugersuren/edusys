const actions = {
  LOAD_SUBJECT_BEGIN: 'LOAD_SUBJECT_BEGIN',
  LOAD_SUBJECT_SUCCESS: 'LOAD_SUBJECT_SUCCESS',
  LOAD_SUBJECT_ERR: 'LOAD_SUBJECT_ERR',

  loadSubjectBegin: () => {
    return {
      type: actions.LOAD_SUBJECT_BEGIN,
    };
  },

  loadSubjectSuccess: data => {
    return {
      type: actions.LOAD_SUBJECT_SUCCESS,
      data,
    };
  },

  loadSubjectErr: err => {
    return {
      type: actions.LOAD_SUBJECT_ERR,
      err,
    };
  },
};

export default actions;
