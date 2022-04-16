import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './fonts/Railway/Raleway-Regular.ttf';
import './fonts/Railway/Raleway-Bold.ttf';
import './fonts/Railway/Raleway-Light.ttf';
import './fonts/Railway/Raleway-Thin.ttf';
import './index.css';

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
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

