
import React, { useContext, useState } from 'react';

const InvoiceContext =  React.createContext({
    invoiceList: [],
    setInvoiceList: (invoices) => {}
})

export const InvoiceContextProvider = (props) => {
    const [invoices, setInvoices] = useState([]);

    const setInvoiceListHandler = (invoice) => {
        setInvoices(invoice);
    }

    const invoiceValue = {
        invoiceList: invoices,
        setInvoiceList: setInvoiceListHandler
    }
    return <InvoiceContext.Provider value={invoiceValue}>{props.children}</InvoiceContext.Provider>
};

export const useInvoiceCtx = () => {
    const ctx = useContext(InvoiceContext);
    return ctx;
};