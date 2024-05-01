export async function fetchAllInvoice() {
    const response = await fetch('http://localhost:8080/api/invoice/all-invoices');

    if(!response.ok) {
        const error = new Error('An error occured');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const invoices = await response.json();
    return invoices;
}

export async function createInvoice(invoice) {
    const response = await fetch('http://localhost:8080/api/invoice/create-invoice', {
        method: 'POST',
        body: JSON.stringify(invoice),
        headers: {
            'Content-Type': 'application/json',
        }
              
    });

    if(!response.ok) {
        const error = new Error('An error occured');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const invoices = await response.json();
    return invoices;
}

export async function fbLogin(param) {
    const response = await fetch('http://localhost:8080/api/auth/facebook', {
        method: 'POST',
        body: JSON.stringify(param),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if(!response.ok) {
        const error = new Error('An error occured');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }
    const token = response.headers.get('x-auth-token');
    const user = await response.json();
    return {jwt: token, userInfo: user};
}