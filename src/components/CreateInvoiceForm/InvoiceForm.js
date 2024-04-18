import React,{ useEffect, useRef, useImperativeHandle } from "react";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import './InvoiceForm.scss';

const InvoiceForm = (props) => {
    const influencerNameRef = useRef();
    const descriptionRef = useRef();
    const totalAmountRef = useRef();
    const brandNameRef = useRef();
    const brandAddressRef = useRef();
    const brandGSTRef = useRef();
    const billingNameRef = useRef();
    const billingAddressRef = useRef();
    const PANRef = useRef();
    const accountHolderNameRef = useRef();
    const accountNumberRef = useRef();
    const bankNameRef = useRef();
    const ifscCodeRef = useRef();

    

    const formatFormObj = () => {
        return {
            "brandName": brandNameRef.current.value.trim(),
            "brandAddress": brandAddressRef.current.value.trim() || 'not available',
            "brandGST": brandGSTRef.current.value.trim() || 'not available',
            "description": descriptionRef.current.value.trim() || 'not available',
            "totalAmount": totalAmountRef.current.value,
            "influencerName": influencerNameRef.current.value.trim(),
            "paymentDetails": {
                "name": billingNameRef.current.value || 'not available',
                "billingAddress": billingAddressRef.current.value || 'not available',
                "panNo": PANRef.current.value,
                "bankDetails": {
                    "accountHolderName": accountHolderNameRef.current.value,
                    "accountNumber": accountNumberRef.current.value,
                    "bankName": bankNameRef.current.value,
                    "ifscCode": ifscCodeRef.current.value
                }
            },
            "invoiceDate": new Date().toDateString()
        }
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const obj = formatFormObj();
        
        props.onFormSubmit(obj);
    }
    
    return ( 
        <>
            <form
                id="my-form"
                noValidate
                autoComplete="off"
                onSubmit={onSubmitHandler}
                >
                    <section className="form-section">
                        <Typography variant="button" display="block" gutterBottom>Influencer details</Typography>
                        <div className="display-form-container">
                            <TextField className="form-content" inputRef={influencerNameRef} id="influencerName" label="Influencer name" variant="outlined" fullWidth />
                            <TextField className="form-content" inputRef={descriptionRef} id="description" label="description" variant="outlined" fullWidth  />
                            <FormControl className="m-0px" sx={{ m: 1 }} fullWidth>
                                <InputLabel htmlFor="totalAmount">Amount</InputLabel>
                                <OutlinedInput
                                    inputRef={totalAmountRef}
                                    id="totalAmount"
                                    type="number"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    label="Amount"
                                />
                            </FormControl>
                        </div>
                    </section>
                    <Divider />
                    <section className="form-section">
                        <Typography variant="button" display="block" gutterBottom>Brand details</Typography>
                        <div className="display-form-container">
                            <TextField className="form-content" id="brandName" inputRef={brandNameRef} label="Brand name" variant="outlined" fullWidth />
                            <TextField
                                id="brandAddress"
                                inputRef={brandAddressRef}
                                className="form-content"
                                label="Address"
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                            />
                            <TextField id="brandGST" inputRef={brandGSTRef} label="GST" variant="outlined" fullWidth />
                        </div>
                    </section>
                    <Divider />
                    <section className="form-section">
                        <Typography variant="button" display="block" gutterBottom>Payment details</Typography>
                        <div className="display-form-container m-b-16px">
                            <TextField className="form-content" id="billingName" label="Billing name" inputRef={billingNameRef} variant="outlined" fullWidth/>
                            <TextField className="form-content" id="billingAddress" label="Billing address" inputRef={billingAddressRef} variant="outlined" fullWidth />
                            <TextField id="panNo" label="PAN" variant="outlined" inputRef={PANRef} fullWidth />
                        </div>
                        <div className="display-form-container">
                            <TextField className="form-content" id="accountHolderName" label="Account holder name" inputRef={accountHolderNameRef} variant="outlined" fullWidth />
                            <TextField className="form-content" id="accountNumber" label="Account number" inputRef={accountNumberRef} type="number" variant="outlined" fullWidth />
                            <TextField className="form-content" id="bankName" label="Bank name" inputRef={bankNameRef} variant="outlined" fullWidth />
                            <TextField id="ifscCode" label="IFSC" variant="outlined" inputRef={ifscCodeRef} fullWidth />
                        </div>
                    </section>
                    <Button form="my-form" type="submit">Create Invoice</Button>
            </form>
        </>
    );
}

export default InvoiceForm;