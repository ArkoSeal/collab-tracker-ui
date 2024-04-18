import React, {useRef, useState} from 'react';
import CardComponent from '../UI/Card';
import Box from '@mui/material/Box';

import { useNavigate } from 'react-router-dom';
import InvoiceForm from './InvoiceForm';
import { useInvoiceCtx } from '../../store/invoice-context.provider';
import { Button } from '@mui/material';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createInvoice } from '../../util/http.js';

const CreateInvoiceFormLayout = () => {
    const navigate = useNavigate();
    const invoiceCtx = useInvoiceCtx();
    const {mutate: postInvoice} = useMutation({mutationFn: createInvoice})

    const handleNavigationBack = () => {
        navigate('/invoice')
    }
    
    const onFormSubmitHandler = (invoiceData) => {
        invoiceCtx.setInvoiceList(invoiceData);
        
        postInvoice(invoiceData);
    }
    return (
        <CardComponent>
            <Box sx={{ width: '100%' }}>
                <InvoiceForm onFormSubmit={onFormSubmitHandler}  />
            </Box>
            <Button onClick={handleNavigationBack}>All Invoice</Button>
        </CardComponent>
    );
}

export default CreateInvoiceFormLayout;



