import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'issuedTo',
    headerName: 'Issued to',
    width: 150
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150
  },
  {
    field: 'amount',
    headerName: 'Total amount',
    type: 'number',
    width: 160,
  },
  {
    field: 'invoiceDate',
    headerName: 'Invoice date',
    type: 'date',
    width: 110
  }
];

const InvoiceTableComponent = (props) => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.rowData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default InvoiceTableComponent;