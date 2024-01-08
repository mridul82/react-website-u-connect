import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Login from './components/Login/Login.jsx';
import SignUp from './components/Login/SignUp.jsx';
import About from './components/Pages/About.jsx';
import Contact from './components/Pages/Contact.jsx';
import Profile from './components/Pages/Profile.jsx';
import Service from './components/Pages/Service.jsx';
import Tutors from './components/Pages/Tutors.jsx';

import StudentProfileForm from './components/Forms/StudentProfileForm.jsx';
import TeacherProfileForm from './components/Forms/TeacherProfileForm.jsx';
import BoardTestSeries from './components/Pages/BoardTestSeries.jsx';
import RankBoosterTestSeries from './components/Pages/RankBoosterTestSeries.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,    
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/service',
    element: <Service />
  },
  {
    path: '/add-tutor-profile',
    element: <TeacherProfileForm />
  },
  {
    path: '/tutor-profile-view',
    element: <Tutors />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
path: '/student-profile-view',
element: <Profile />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {       
    path: '/add-student-profile',
    element: <StudentProfileForm />
  },
  {
    path: '/add-teacher-profile',
    element: <TeacherProfileForm />
  },
  {
    path: '/target-board-test-series',
    element: <BoardTestSeries />
  },
  {
    path: '/rank-booster-test-series',
    element: <RankBoosterTestSeries />
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
