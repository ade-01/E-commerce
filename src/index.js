import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-6ef4nydtm0i0agbz.us.auth0.com"
    clientId="dQZDAX9xcdnZy5MScN4TzZFjy7MGGgCj"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000'
    }}
  >
        <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();