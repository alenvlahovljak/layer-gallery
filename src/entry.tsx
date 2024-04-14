import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { envs } from '@/config';
import store from '@/store';

import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={envs.rootUrl}>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
