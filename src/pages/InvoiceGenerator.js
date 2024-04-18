import React from 'react';
import DownloadPDF from '../components/DownloadPDF';

import CreateInvoiceFormLayout from '../components/CreateInvoiceForm/CreateInvoiceFormLayout';

const InvoiceGenerator = () => {
    

    return (
        <div>
            <CreateInvoiceFormLayout />
            <DownloadPDF />
        </div>
    );
}

export default InvoiceGenerator;