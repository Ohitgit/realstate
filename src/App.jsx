import React from 'react'

import Header from './compontens/Header'
import About from './compontens/About'
import Projects from './compontens/Projects'
import Testmoinal from './compontens/Testmoinal'
import Contact from './compontens/Contact'
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className='w-full overflow-hidden'>
   <Header></Header>
   <About></About>
   <Projects></Projects>
   <Testmoinal></Testmoinal>
   <Contact></Contact>
    </div>
  )
}

export default App
