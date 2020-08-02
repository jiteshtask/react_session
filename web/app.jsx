import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ClientRoutes from './routes/ClientRoutes';
import { appStore } from './store';

const Main = () => (
  <Provider store={appStore}>
    <ClientRoutes />
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('gurdian_app'));
