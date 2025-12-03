function loadAdminPanel() {
    updateOrdersDisplay();
    
    // Her 10 saniyede bir siparişleri yenile
    setInterval(() => {
        updateOrdersDisplay();
    }, 10000);
}