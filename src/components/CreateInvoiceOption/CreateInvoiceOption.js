import React from "react";
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';

import './CreateInvoiceOption.scss';

const CreateInvoiceOption = () => {
    const navigate = useNavigate();

    const onCreateInvoice = () => {
        navigate('/invoice-gen');
    }
    
    return (
        <Card variant="outlined">
            <CardContent className='create-invoice'>
                <Typography variant="h5" component="div">
                    CREATE NEW INVOICE
                </Typography>
                <Fab color="primary" className="create-invoice-button" aria-label="add" onClick={onCreateInvoice}>
                    <AddIcon />
                </Fab>
            </CardContent>
        </Card>
    )
}
export default CreateInvoiceOption;