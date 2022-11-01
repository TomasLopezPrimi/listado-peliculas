import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {ChakraProvider,theme} from '@chakra-ui/react';

import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </ChakraProvider>
);
