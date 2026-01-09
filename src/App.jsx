import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import Recipes from './pages/Recipes'
import RecipesDetails from './pages/RecipesDetails'
import Favorites from './pages/Favorites'
import Notfound from './pages/Notfound'
import Home from './pages/Home'
const myrouter = createBrowserRouter ([
  {
    path : "/",
    element : <Layout />,
    children: [
      {index: true, element: <Login />},
      {path: "signup", element: <Signup />},
      {
        element: <ProtectedRoute />,
        children: [
          {path : "home",element: <Home />},
          {path: "recipe", element: <Recipes />},
          {path: "recipe/:id", element: <RecipesDetails/>},
          {path: "favourite", element: <Favorites/>},
          {path :"*", element: <Notfound />}
        ]
      }
    ]
  }
])

const App = () => {
  
  return <RouterProvider router={myrouter}/>
}

export default App