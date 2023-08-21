import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import { store } from './app/store.ts';
import { apiSlice } from './features/posts/api/apiSlice.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
