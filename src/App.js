import React, { useContext } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.scss';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

import {Route, Routes, Navigate, redirect} from 'react-router-dom';
import InvoiceGenerator from './pages/InvoiceGenerator';
import Dashboard from './pages/Dashboard';
import InvoiceList from './pages/InvoiceList';
import InvoiceDetails from './pages/InvoiceDetails';

import Login from './pages/Login';
import AuthContextProvider from './providers/auth-context.provider';

const queryClient = new QueryClient();

function App() {
  const ctxAuth = useContext('AuthContext');

  return (
    <React.Fragment>
        <CssBaseline />
        <Container maxWidth='xl'>
            <div className='collab-main-container'>
              <QueryClientProvider client={queryClient}>
                  <Routes>
                    <Route path='/' element={<Navigate to='/login' replace/>} />
                    <Route path='/login' element={<Login />} />
                    {ctxAuth?.token && (
                      <Route path='/collab'element={<Dashboard />} >
                        <Route path='dashboard' element={<Dashboard />} />
                        <Route path='invoice' element={<InvoiceList />} loader={()=>{ redirect('/login')}}/>
                        <Route path='invoice-gen' element={<InvoiceGenerator />} />
                        <Route path='invoice-details' element={<InvoiceDetails />} />
                      </Route>
                    )
                    }
                  </Routes>
              </QueryClientProvider>
            </div>
        </Container>
    </React.Fragment>
   );
}

export default App;
