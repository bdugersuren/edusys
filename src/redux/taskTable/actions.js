const actions = {
  LOAD_TASK_BEGIN: 'LOAD_TASK_BEGIN',
  LOAD_TASK_SUCCESS: 'LOAD_TASK_SUCCESS',
  LOAD_TASK_ERR: 'LOAD_TASK_ERR',
  FILTER_TASK_DATAS: 'LOAD_TASK_ERR',

   loadTaskBegin: () => {
    return {
      type: actions.LOAD_TASK_BEGIN,
    };
  },

   loadTaskSuccess: data => {
    return {
      type: actions.LOAD_TASK_SUCCESS,
      data,
    };
  },

   filterTaskDatas: data => {
    return {
      type: actions.FILTER_TASK_DATAS,
      data,
    };
  },

   loadTaskErr: err => {
    return {
      type: actions.LOAD_TASK_ERR,
      err,
    };
  },
};

export default actions;
