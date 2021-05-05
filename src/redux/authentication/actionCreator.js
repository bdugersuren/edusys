import axios from '../../utility/axios';
//import Cookies from 'js-cookie';
import actions from './actions';
import { Redirect} from "react-router";


const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;

const login = (username, password) => {
  
  return async dispatch => {
   
    try {
      dispatch(loginBegin());
      await axios.post("users/login", {email:username, password:password}).then(({ data }) => {
        //localStorage.setItem('lms-token', data.token);  
        dispatch(loginSuccess(data));
      });
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = () => {
  return async dispatch => {
    try {
      dispatch(logoutBegin());
     // Cookies.remove('logedIn');
     <Redirect to="/"/>
      dispatch(logoutSuccess(null));
     
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut };

