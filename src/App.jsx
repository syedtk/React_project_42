import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import ContactDetails from './Pages/User_Details/ContactDetails';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
        {
          path:'/',
          element: <Home></Home>,
          loader: ()=> fetch('https://jsonplaceholder.typicode.com/users')
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path:'/details/:id',
         element: <ContactDetails></ContactDetails>,
         loader:({params})=>fetch (`https://jsonplaceholder.typicode.com/users/${params.id}`)
        }
      ]
    },
    {
      path: '/home',
      element: <Home></Home>,
      
    },
    {
      path: '/contact',
      element: <Contact></Contact>

    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;