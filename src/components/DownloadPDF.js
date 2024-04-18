import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFDocument from './PDFDocument';

const DownloadPDF = () => {
    return (
        <PDFDownloadLink document={<PDFDocument />} fileName="somename.pdf">
            {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Download PDF'
            }
        </PDFDownloadLink>
    );
}

export default DownloadPDF;