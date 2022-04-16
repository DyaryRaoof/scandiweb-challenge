import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './fonts/Railway/Raleway-Regular.ttf';
import './fonts/Railway/Raleway-Bold.ttf';
import './fonts/Railway/Raleway-Light.ttf';
import './fonts/Railway/Raleway-Thin.ttf';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);

