//Components
import Home from "../../frontend/containers/Home";
import Login from "../../frontend/containers/Login";
import Register from "../../frontend/containers/Register";
import Game from "../../frontend/containers/Game";
import NotFound from "../../frontend/containers/NotFound";


const serverRoutes = (isLogged) => {
  return [
    {
      path: '/',
      component: Home,
      exact: true,
    },
    {
      name:"NotFound",
      component: NotFound,
    },
  ]
}

export default serverRoutes;
