function goToAdmin() {
    window.location.href = 'admin.html';
}

// Sayfa yüklendiğinde müşteri panelini başlat
document.addEventListener('DOMContentLoaded', function() {
    // Database'den verileri yükle
    cart = loadFromDatabase('cart');
    
    loadCustomerPanel();
    
    // Sipariş ver butonuna event listener ekle
    document.getElementById('order-btn').addEventListener('click', createOrder);
});