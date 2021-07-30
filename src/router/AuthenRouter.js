import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router";
import {useSelector}from "react-redux"

const AuthenRouter = ({ component: Component, ...rest }) =>{
  const UserReducer = useSelector(state => state.UserReducer)
  return (<Route
    {...rest}
    render={(props) => {
      console.log("user", UserReducer.data);
      return !UserReducer.data ? <Redirect to="/login" /> : <Component {...props} />;
    }}
  />)
} 

export default AuthenRouter;
