import { IRoute } from 'models/IRoute';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import ProjectsList from 'pages/ProjectsList';

export const routes: IRoute[] = [
  {
    auth: false, 
    page: Home, 
    path: '/'
  },
  {
    auth: false,
    page: Login,
    path: '/login'
  },
  {
    auth: false,
    page: Register,
    path: '/register'
  },
  {
    auth: false,
    page: ProjectsList,
    path: '/projects'
  },
]