//import Cookies from 'js-cookie';
import actions from './actions';

const { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERR, LOGOUT_BEGIN, LOGOUT_SUCCESS, LOGOUT_ERR } = actions;

const initState = {
  //login: Cookies.get('logedIn'),
  _id:null,
  role:null,
  name:null,
  email:null,
  loading: false,
  error: null,
  menu:[]
};

/**
 *
 * @todo impure state mutation/explaination
 */
const AuthReducer = (state = initState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:      
      return {
        ...state,
        login: data,
        _id:data.user._id,
        name:data.user.name,
        email:data.user.email,
        role:data.user.role,
        loading: false,
        menu:data.menu
      };
     
    case LOGIN_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        login: data,
        _id:null,
        role:null,
        name:null,
        email:null,
        loading: false,
      };
    case LOGOUT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};
export default AuthReducer;
