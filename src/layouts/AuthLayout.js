import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//login, register, forget
const AuthLayout = (props) => {
 
      return (
      <div>
        <div>
          <Link to="/quiz" >Тест </Link>
          <Link to="/login" >Нэвтрэх </Link>
        </div>
        {props.children}
        <div>This is Auth footer page</div>
      </div>     
      );

};
export default AuthLayout;
