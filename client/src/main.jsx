import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="221932968154-64mm0iqfkqo25r98erjqk7fro19j77k0.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
