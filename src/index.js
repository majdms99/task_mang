import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as AlertProvider, positions, transitions } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const queryClient = new QueryClient()
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 8000,
  transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </QueryClientProvider>
);


