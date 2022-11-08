import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Services from './components/Services/Services';

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch('http://localhost:5000/limitedservices'),
        element: <Home></Home>
      },
      {
        path: "/services",
        loader: () => fetch('http://localhost:5000/services'),
        element: <Services></Services>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  }
])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
