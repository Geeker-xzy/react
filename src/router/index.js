import React, { Component } from 'react';
import { Switch, Route ,Redirect} from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';
import Spot from "../pages/spot";
const Spotv = asyncComponent(() => import("../pages/spotv"));
// const helpcenter = asyncComponent(() => import("@/pages/helpcenter/helpcenter"));
// const production = asyncComponent(() => import("@/pages/production/production"));
// const balance = asyncComponent(() => import("@/pages/balance/balance"));

// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
export default class RouteConfig extends Component{
  render(){
    return(
        <Switch>
          <Route path="/spot" exact component={Spot} />
          <Route path="/spotv" component={Spotv} />
          <Redirect to="/spot" />
        </Switch>
    )
  }
}
