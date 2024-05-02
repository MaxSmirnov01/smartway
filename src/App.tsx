import { useRoutes } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import RepositoryPage from './pages/RepositoryPage';

const App = () => {
  const pages = useRoutes([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
    {
      path: '/:name',
      element: <RepositoryPage />,
    },
  ]);

  return (
    <>
      <main>{pages}</main>
    </>
  );
};

export default App;
