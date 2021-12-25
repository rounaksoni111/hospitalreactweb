import {
  BrowserRouter as Router,
  // Routes,
  // Route,
  useRoutes,
} from "react-router-dom";

import Home from './component/Home';
import Aboutus from "./component/Aboutus";
import Blog from './component/Blog';
import BlogDetails from './component/BlogDetails';
import Contact from './component/Contact';
import Doctor from './component/Doctor';
import LgRg from "./component/LgRg";
import Loggin from "./component/Loggin";



const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/aboutus", element: <Aboutus /> },
    { path: "/blog", element: <Blog /> },
    { path: "/blogdetails", element: <BlogDetails /> },
    { path: "/contact", element: <Contact /> },
    { path: "/doctor", element: <Doctor /> },
    { path: "/lgrg", element: <LgRg/> },
    { path: "/loginn", element: <Loggin/> },
    
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;