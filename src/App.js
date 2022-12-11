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
import PrivateRouter from './PrivateRouter/PrivateRouter';
import Home from './components/Home/Home';

function App() {

const router = createBrowserRouter([
  {path:'/', element: <Main></Main>,children:[

    {path:'/', element:<Home></Home>},
    {path:'/login', element:<Login></Login>},
    {path:'/register', element:<Register></Register>},
    {path:'/courses', 
    loader: () => fetch('https://master-server.vercel.app/courses'),
    element:<Courses></Courses>},
    {path:'/course/details/:id' ,
    loader: ({params}) => fetch(`https://master-server.vercel.app/course/details/${params.id}`),
    element: <CourseDetails></CourseDetails>},

    {path:'/checkout/:id',
    loader: ({params}) => fetch(`https://master-server.vercel.app/course/details/${params.id}`),
    element:<PrivateRouter><Checkout></Checkout></PrivateRouter>},
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
