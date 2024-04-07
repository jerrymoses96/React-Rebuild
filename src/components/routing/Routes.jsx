import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "components/screens/Home";
import NotFound from "components/screens/NotFound";
import HomeThree from "components/screens/HomeThree/index";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "homethree",
      element: <HomeThree />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
