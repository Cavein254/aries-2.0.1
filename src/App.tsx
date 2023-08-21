import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import AddPostPage from './pages/AddPostPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import PostsPage from './pages/PostsPage';
import RegisterPage from './pages/RegisterPage';

const routerConfig = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/posts',
        element: <PostsPage />,
      },
      {
        path: '/new',
        element: <AddPostPage />,
      },
    ],
  },
];
const router = createBrowserRouter(routerConfig);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
