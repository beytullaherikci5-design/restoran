let currentPanel = 'customer';
let isLoggedIn = false;

function showLoginPanel() {
    hideAllPanels();
    document.getElementById('login-panel').classList.remove('hidden');
    currentPanel = 'login';
}

function showCustomerPanel() {
    hideAllPanels();
    document.getElementById('customer-panel').classList.remove('hidden');
    currentPanel = 'customer';
    loadCustomerPanel();
}

function showAdminPanel() {
    hideAllPanels();
    document.getElementById('admin-panel').classList.remove('hidden');
    currentPanel = 'admin';
    loadAdminPanel();
}

function hideAllPanels() {
    document.getElementById('customer-panel').classList.add('hidden');
    document.getElementById('login-panel').classList.add('hidden');
    document.getElementById('admin-panel').classList.add('hidden');
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'kaan' && password === '123') {
        isLoggedIn = true;
        showAdminPanel();
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    } else {
        alert('Hatalı kullanıcı adı veya şifre!');
    }
}

function logout() {
    isLoggedIn = false;
    showCustomerPanel();
}

// Sayfa yüklendiğinde müşteri panelini başlat
document.addEventListener('DOMContentLoaded', function() {
    // Database'den verileri yükle
    cart = loadFromDatabase('cart');
    orders = loadFromDatabase('orders');
    
    loadCustomerPanel();
    
    // Sipariş ver butonuna event listener ekle
    document.getElementById('order-btn').addEventListener('click', createOrder);
});