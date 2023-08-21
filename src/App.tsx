import Pad from './components/pad/Pad';
import Layout from './layout/Layout';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const routerConfig = [
  {
    path:'/login',
    element: <LoginPage />,
  }
  {
    path:'/register',
    element:<RegisterPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]

function App() {
  return (
    <>
      <h1>This is a basic html markdown file</h1>
      <Pad />
    </>
  );
}

export default App;
