import actions from './actions';
import initialState from '../../demoData/classData.json';
import axios from "../../utility/axios";


const { loadClassBegin, loadClassSuccess, loadClassErr } = actions;

const loadClassDatas = () => {
  return async dispatch => {
    try {
      dispatch(loadClassBegin());
      
      await axios.get("classes?limit=100").then(({ data }) => {
        return dispatch(loadClassSuccess(data));
      });

     // dispatch(loadClassSuccess(initialState))
    } catch (err) {
      dispatch(loadClassErr(err));
    }
  };
};

export { loadClassDatas };
