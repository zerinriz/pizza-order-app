import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Users from "./user/Users";
import Menu from "./core/Menu";
import IngredientsTest from "./core/IngredientsTest";

const MainRouter = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/api/orders/:id" component={IngredientsTest} />
      </Switch>
    </>
  );
};

export default MainRouter;
