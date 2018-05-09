import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';

import { applyMiddleware,createStore } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ApolloLink } from 'apollo-client-preset';

import { GITHUB_TOKEN } from './utils/constants';

const httpLink = new HttpLink({ uri:'https://api.github.com/graphql' });

const middleWareAuthLink = new ApolloLink((operation,forward) => {
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  operation.setContext({
    headers: {
      Authorization: `bearer ${token}`
    }
  });
  return forward(operation);
})

const httpLinkWithAuthToken = middleWareAuthLink.concat(httpLink);

const client = new ApolloClient({
  link: httpLinkWithAuthToken,
  cache: new InMemoryCache()
});

const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
          <ApolloProvider client={client}>
            <App />
          </ApolloProvider>
        </Provider>
    </BrowserRouter>
,document.getElementById('root'));

registerServiceWorker();
