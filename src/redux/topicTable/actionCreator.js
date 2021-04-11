import actions from './actions';
import initialState from '../../demoData/topicData.json';
import axios from "../../utility/axios";

const { loadTopicBegin, loadTopicSuccess, loadTopicErr } = actions;

const loadTopicDatas = () => {
  return async dispatch => {
    try {
      dispatch(loadTopicBegin());

      await axios.get("topics?limit=100").then(({ data }) => {
        return dispatch(loadTopicSuccess(data));
      });
      
      //dispatch(loadTopicSuccess(initialState));
    } catch (err) {
      dispatch(loadTopicErr(err));
    }
  };
};

export { loadTopicDatas };
