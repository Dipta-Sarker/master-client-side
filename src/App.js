import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main/Main';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {

const router = createBrowserRouter([
  {path:'/', element: <Main></Main>,children:[

    {path:'/login', element:<Login></Login>},
    {path:'/register', element:<Register></Register>}


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
