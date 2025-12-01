const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api' 
    : '/api';

async function getOrders() {
    const response = await fetch(`${API_URL}/orders`);
    return await response.json();
}

async function createOrderAPI(order) {
    const response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
    });
    return await response.json();
}

async function deleteOrderAPI(orderId) {
    const response = await fetch(`${API_URL}/orders?id=${orderId}`, {
        method: 'DELETE'
    });
    return await response.json();
}
