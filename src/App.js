import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddService from './components/AddService/AddService';
import MyReviews from './components/MyReviews/MyReviews';

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch('https://home-service-server.vercel.app/limitedservices'),
        element: <Home></Home>
      },
      {
        path: "/services",
        loader: () => fetch('https://home-service-server.vercel.app/services'),
        element: <Services></Services>
      },
      {
        path: "/addservice",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: "/myreviews",
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
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
