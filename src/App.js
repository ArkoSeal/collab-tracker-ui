import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.scss';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

import {BrowserRouter, Route, Routes, Redirect, Navigate} from 'react-router-dom';
import InvoiceGenerator from './pages/InvoiceGenerator';
import Dashboard from './pages/Dashboard';
import InvoiceList from './pages/InvoiceList';
import InvoiceDetails from './pages/InvoiceDetails';
import HeaderComponent from './components/Header';

const queryClient = new QueryClient();

function App() {
  return (
    <React.Fragment>
        <CssBaseline />
        <Container maxWidth='xl'>
            <HeaderComponent />
            <div className='collab-main-container'>
              <QueryClientProvider client={queryClient}>
                <Routes>
                  <Route path='/' element={<Navigate to='/collab' replace/>} />
                  <Route path='/collab' element={<Dashboard />} />
                  <Route path='/invoice' element={<InvoiceList />} />
                  <Route path='/invoice-gen' element={<InvoiceGenerator />} />
                  <Route path='/invoice-details' element={<InvoiceDetails />} />
                </Routes>
              </QueryClientProvider>
            </div>
        </Container>
    </React.Fragment>
   );
}

export default App;
