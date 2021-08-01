import React, { useState, useEffect } from "react";
import { Redirect, Route, withRouter } from "react-router";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";

const AuthenRouter = ({ component: Component, ...rest }) => {
  const [isAuthen,setIsAuthen]=useState(false)
  const UserReducer = useSelector((state) => state.UserReducer);
  return (
    <Route
      {...rest}
      render={(props) => {
        const userInStorage = localStorage.getItem("ADMIN");
        return !userInStorage&&!UserReducer.data ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default withRouter(AuthenRouter);
