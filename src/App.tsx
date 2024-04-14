import { useEffect, FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { dayjsSetup, flattenRoutes } from '@/utils';
import routes from '@/router';
import { notificationObserver } from '@/store';

import Layout from '@/components/layout';

import '@/styles/global.css';

dayjsSetup();

const App: FC = () => {
  useEffect(() => notificationObserver(), []);

  return (
    <Routes>
      {flattenRoutes(routes).map(({ key, path, component }) => (
        <Route key={key} path={path} element={<Layout>{component}</Layout>} />
      ))}
    </Routes>
  );
};

export default App;
