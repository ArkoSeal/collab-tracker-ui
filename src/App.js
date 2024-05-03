import React, { useContext } from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.scss';

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./CollabTheme";
import Container from '@mui/material/Container';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

import {Route, Routes, Navigate, redirect} from 'react-router-dom';
import InvoiceGenerator from './pages/InvoiceGenerator';
import Dashboard from './pages/Dashboard';
import InvoiceList from './pages/InvoiceList';
import InvoiceDetails from './pages/InvoiceDetails';
import { AuthContext } from './providers/auth-context.provider';
import Login from './pages/Login';

const queryClient = new QueryClient();

function App() {
  const ctxAuth = useContext('AuthContext');
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className='collab-main-container'>
            <QueryClientProvider client={queryClient}>
                <Routes>
                  <Route path='/' element={<Navigate to='/login' replace/>} />
                  <Route path='/login' element={<Login />} />
                    <Route path='/collab' element={<Dashboard />} >
                      <Route path='invoice' element={<InvoiceList />} loader={()=>{ redirect('/login')}}/>
                      <Route path='invoice-gen' element={<InvoiceGenerator />} />
                      <Route path='invoice-details' element={<InvoiceDetails />} />
                    </Route>
                </Routes>
            </QueryClientProvider>
          </div>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
