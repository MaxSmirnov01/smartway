import { useRoutes } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

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
  ]);

  return (
    <>
      <main>{pages}</main>
    </>
  );
};

export default App;
