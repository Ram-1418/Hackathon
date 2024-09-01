import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Register from './components/Register.jsx'
import Quiz from './components/Quiz.jsx'
import Apppointment from './components/Apppointment.jsx'

import App from './components/App.jsx'

import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import QuizForm from './components/QuizForm.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<>
        <Home />
        
        </>} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/appointments' element={<Apppointment />} />
      <Route path='/dashboard/:doctor' element={<Dashboard />} />
      <Route path='/quiz-form' element={<QuizForm />} />
      <Route path='/login/:doctor' element={<Login />} />
      <Route path='/login' element={<Login />} />
      {/* <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       /> */}
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
