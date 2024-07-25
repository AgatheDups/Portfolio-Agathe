import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FirstPage from './page/FirstPage';
import Home from './page/Home';
import Portfolio from './page/Portfolio';
import Contact from './page/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FirstPage/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/acceuil',
    element: <Home/>

  },
  {
    path: '/portfolio',
    element: <Portfolio/>
  }

])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;


// add framer motion