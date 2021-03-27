import React from "react";
import { Route } from "react-router-dom";
import { routes } from "services/router/routes";

const Routes: React.FC = () => {
  return (
    <>
      {routes.map((route, index) => (
        <Route key={index} exact path={route.path} component={route.page} />
      ))}
    </>
  );
};

export default Routes;
