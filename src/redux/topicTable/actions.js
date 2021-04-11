const actions = {
  LOAD_TOPIC_BEGIN: 'LOAD_TOPIC_BEGIN',
  LOAD_TOPIC_SUCCESS: 'LOAD_TOPIC_SUCCESS',
  LOAD_TOPIC_ERR: 'LOAD_TOPIC_ERR',
  FILTER_TOPIC_DATAS: 'LOAD_TOPIC_ERR',

  loadTopicBegin: () => {
    return {
      type: actions.LOAD_TOPIC_BEGIN,
    };
  },

  loadTopicSuccess: data => {
    return {
      type: actions.LOAD_TOPIC_SUCCESS,
      data,
    };
  },

  filterTopicDatas: data => {
    return {
      type: actions.FILTER_TOPIC_DATAS,
      data,
    };
  },

  loadTopicErr: err => {
    return {
      type: actions.LOAD_TOPIC_ERR,
      err,
    };
  },
};

export default actions;
