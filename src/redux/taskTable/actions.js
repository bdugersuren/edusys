const actions = {
  LOAD_TASK_BEGIN: 'LOAD_TASK_BEGIN',
  LOAD_TASK_SUCCESS: 'LOAD_TASK_SUCCESS',
  LOAD_TASK_ERR: 'LOAD_TASK_ERR',
  FILTER_TASK_DATAS: 'LOAD_TASK_ERR',
  CHANGE_SELECTED_SUBJECT_ID: 'CHANGE_SELECTED_SUBJECT_ID',
  CHANGE_SELECTED_CLASS_ID: 'CHANGE_SELECTED_CLASS_ID',
  CHECKED_SELECTED_TOPIC_IDS: 'CHECKED_SELECTED_TOPIC_IDS',
  CHENGE_CHECKED_TASK_ID: 'CHENGE_CHECKED_TASK_ID',


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

  changeSelectedSubjectId: subjId => {
    return {
      type: actions.CHANGE_SELECTED_SUBJECT_ID,
      subjId,
    };
  },

  changeSelectClassId: clssId => {
    return {
      type: actions.CHANGE_SELECTED_CLASS_ID,
      clssId,
    };
  },

  changeCheckedTopicIds: topicIds => {
    return {
      type: actions.CHECKED_SELECTED_TOPIC_IDS,
      topicIds,
    };
  },

  changeCheckedTaskId: taskInf => {
    return {
      type: actions.CHENGE_CHECKED_TASK_ID,
      taskInf,
    };
  },



};

export default actions;
