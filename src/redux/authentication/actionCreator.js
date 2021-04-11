import axios from '../../utility/axios';
//import Cookies from 'js-cookie';
import actions from './actions';

const { loginBegin, loginSuccess, loginErr, logoutBegin, logoutSuccess, logoutErr } = actions;

const login = (username, password) => {
  return async dispatch => {
    try {
      dispatch(loginBegin());
      
      // http://localhost:8000
      await axios.post("users/login", {email:username, password:password})
      .then(({data})=>{
        //console.log('login information ==========================>',data);
       // Cookies.set('logedIn', true);        
       return dispatch(loginSuccess(data));
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
      dispatch(logoutSuccess(null));
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

export { login, logOut };


/*


      setTimeout(() => {
        Cookies.set('logedIn', true);

        return dispatch(loginSuccess(true));
      }, 5000);

*/