import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Courses from './components/Courses/Courses';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Checkout from './components/Checkout/Checkout';
import Blog from './components/Blog/Blog';

function App() {

const router = createBrowserRouter([
  {path:'/', element: <Main></Main>,children:[

    {path:'/login', element:<Login></Login>},
    {path:'/register', element:<Register></Register>},
    {path:'/courses', 
    loader: () => fetch('http://localhost:5000/courses'),
    element:<Courses></Courses>},
    {path:'/course/details/:id' ,
    loader: ({params}) => fetch(`http://localhost:5000/course/details/${params.id}`),
    element: <CourseDetails></CourseDetails>},

    {path:'/checkout/:id',
    loader: ({params}) => fetch(`http://localhost:5000/course/details/${params.id}`),
    element:<Checkout></Checkout>},
    {path:'/blog' , element:<Blog></Blog>}
  ]},
  {path:'/*', element: <h1>Error 404 . NO Components !!</h1>}
])

  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
