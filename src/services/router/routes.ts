import { IRoute } from 'models/IRoute';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import ProjectsList from 'pages/ProjectsList';
import Project from 'pages/Project';
import Profile from 'pages/Profile';
import ForgotPassword from 'pages/ForgotPassword';
import ResetPassword from 'pages/ResetPassword';


export const routePaths = {
  home: '/',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgotPassword',
  resetPassword: '/reset/:id',
  projectsList: '/projects',
  project: '/projects/:id',
  profile: '/profile/:id',
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
    page: ForgotPassword,
    path: routePaths.forgotPassword
  },
  {
    auth: false,
    page: ResetPassword,
    path: routePaths.resetPassword
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
  {
    auth: false,
    page: Project,
    path: routePaths.project
  },
  {
    auth: false,
    page: Profile,
    path: routePaths.profile
  }
]