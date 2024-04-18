import React, {useEffect, useState} from 'react';
import InvoiceTableComponent from '../components/InvoiceTable/InvoiceTableComponent';
import {useQuery} from '@tanstack/react-query';

import './InvoiceList.style.scss';

import CreateInvoiceOption from '../components/CreateInvoiceOption/CreateInvoiceOption';
import { useInvoiceCtx } from '../store/invoice-context.provider';

import { fetchAllInvoice } from '../util/http';

const createRowData = (inv, index) => ({
    id: index,
    issuedTo: inv.brandName,
    description: inv.description,
    amount: inv.totalAmount,
    invoiceDate: new Date()
});


const InvoiceList = () => {

    const {data: invoices, error, isLoading, refetch} = useQuery({
        queryKey: ['invoices'],
        queryFn: fetchAllInvoice
    });

    let {setInvoiceList} = useInvoiceCtx();

    const [rowData, setRowData] = useState([]);
    
    
    const formatInvoiceData = (invoiceList) => {
        const rows = [];
        invoiceList.forEach( (inv, index) => {
            rows.push(createRowData(inv, index+1));
        });
        setRowData(rows);
    }

    useEffect( () => {
        if(invoices?.length > 1) {
            setInvoiceList(invoices);
            formatInvoiceData(invoices);
        }
    }, [invoices]);
    
    return (
        <div className='invoice-list-container'>
            {isLoading && <h3>...Loading</h3>}
            {
                !isLoading && (
                    <>
                        <CreateInvoiceOption />
                        <InvoiceTableComponent rowData={rowData} />
                    </>
                )
            }
        </div>
    );
}

export default InvoiceList;