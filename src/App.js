import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

function App() {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/signin",
          element: <SignIn></SignIn>
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
