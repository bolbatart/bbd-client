import { IRoute } from 'models/IRoute';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import ProjectsList from 'pages/ProjectsList';

export const routePaths = {
  home: '/',
  login: '/login',
  register: '/register',
  projectsList: '/projects'
}

export const routes: IRoute[] = [
  {
    auth: false, 
    page: Home, 
    path: routePaths.home
  },
  {
    auth: false,
    page: Login,
    path: routePaths.login
  },
  {
    auth: false,
    page: Register,
    path: routePaths.register
  },
  {
    auth: false,
    page: ProjectsList,
    path: routePaths.projectsList
  },
]