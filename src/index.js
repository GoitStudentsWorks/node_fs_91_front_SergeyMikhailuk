import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import 'modern-normalize';
import 'styles/base.css';

import { store, persistor } from 'store';
import routing from 'routes';

const router = createBrowserRouter(createRoutesFromElements(routing()), {
  basename: '/node_fs_91_front_SergeyMikhailuk',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
