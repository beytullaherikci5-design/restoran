async function updateOrdersDisplay() {
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = '<p>Yükleniyor...</p>';
    
    const orders = await getOrders();
    ordersList.innerHTML = '';
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p>Henüz sipariş yok</p>';
        return;
    }
    
    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.className = 'order-item';
        
        const itemsList = order.items.map(item => 
            `${item.name} x${item.quantity}`
        ).join(', ');
        
        orderDiv.innerHTML = `
            <h4>Sipariş #${order.id}</h4>
            <p><strong>Saat:</strong> ${order.time}</p>
            <p><strong>Ürünler:</strong> ${itemsList}</p>
            <p><strong>Toplam:</strong> ${order.total}₺</p>
            <button onclick="completeOrder(${order.id})">Hazır - Sil</button>
        `;
        
        ordersList.appendChild(orderDiv);
    });
}

async function completeOrder(orderId) {
    await deleteOrderAPI(orderId);
    updateOrdersDisplay();
    alert('Sipariş tamamlandı ve silindi!');
}