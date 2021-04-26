const actions = {
  LOAD_TASK_LEVEL_BEGIN: 'LOAD_TASK_LEVEL_BEGIN',
  LOAD_TASK_LEVEL_SUCCESS: 'LOAD_TASK_LEVEL_SUCCESS',
  LOAD_TASK_LEVEL_ERR: 'LOAD_TASK_LEVEL_ERR',
  
  loadTaskLevelBegin: () => {
    return {
      type: actions.LOAD_TASK_LEVEL_BEGIN,
    };
  },

  loadTaskLevelSuccess: data => {
    return {
      type: actions.LOAD_TASK_LEVEL_SUCCESS,
      data,
    };
  },

  loadTaskLevelErr: err => {
    return {
      type: actions.LOAD_TASK_LEVEL_ERR,
      err,
    };
  },
};

export default actions;
