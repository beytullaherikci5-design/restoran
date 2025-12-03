async function updateOrdersDisplay() {
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = '<div class="loading">Yükleniyor...</div>';
    
    try {
        const orders = await getOrders();
        ordersList.innerHTML = '';
        
        if (orders.length === 0) {
            ordersList.innerHTML = '<p class="no-orders">Henüz sipariş yok</p>';
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
    } catch (error) {
        console.error('Siparişler yüklenirken hata:', error);
        ordersList.innerHTML = '<p class="error">Siparişler yüklenirken hata oluştu. Sayfayı yenileyin.</p>';
    }
}

async function completeOrder(orderId) {
    if (!confirm('Bu siparişi tamamlamak istediğinizden emin misiniz?')) {
        return;
    }
    
    try {
        await deleteOrderAPI(orderId);
        updateOrdersDisplay();
        alert('Sipariş tamamlandı ve silindi!');
    } catch (error) {
        console.error('Sipariş silinirken hata:', error);
        alert('Sipariş silinirken hata oluştu. Lütfen tekrar deneyin.');
    }
}