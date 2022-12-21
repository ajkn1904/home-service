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
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import ReviewEditCard from './components/ReviewEditCard/ReviewEditCard';

function App() {

  //Adding routes
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
        element: <Services></Services>
      },
      {
        path: '/services/:id',
        loader: async ({params}) => {
          return fetch(`https://home-service-server.vercel.app/services/${params.id}`)
        },
        element: <ServiceDetails></ServiceDetails>
      },
      {
        path: '/specificReview/:id',
        loader: async ({params}) => {
          return fetch(`https://home-service-server.vercel.app/specificReview/${params.id}`)
        },
        element: <ReviewEditCard></ReviewEditCard>
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
    <div data-theme='light'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
