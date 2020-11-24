import React from "react";
import { IRouteConfig } from "./routerConfig";
const routes: IRouteConfig[] = [
  {
    name: "useState",
    path: "/hook/useState",
    key: "useState",
    component: React.lazy(() => import("@/pages/hook/UseState"))
  },
  {
    name: "useEffect",
    path: "/hook/useEffect",
    key: "useEffect",
    component: React.lazy(() => import("@/pages/hook/UseEffect"))
  },
  {
    name: "自定义Hook",
    path: "/hook/customHook",
    key: "customHook",
    component: React.lazy(() => import("@/pages/hook/custom/CustomDemo"))
  },
  {
    name: "useReducer",
    path: "/hook/useReducer",
    key: "useReducer",
    component: React.lazy(() => import("@/pages/hook/reducer/UseReducer"))
  },
  {
    name: "useContext",
    path: "/hook/useContext",
    key: "useContext",
    component: React.lazy(() => import("@/pages/hook/context/ContextDemo"))
  },
  {
    name: "others",
    path: "/hook/others",
    key: "others",
    component: React.lazy(() => import("@/pages/hook/OtherHook"))
  },
  {
    name: "组合测试",
    path: "/combination/demo1",
    key: "combination-1-1",
    component: React.lazy(() => import("@/pages/RecursionDemo"))
  },
  {
    name: "路由demo1",
    path: "/router/demo1",
    key: "router-1",
    component: React.lazy(() => import("@/pages/router-demo/RouterDemo"))
  }
];

export default routes;