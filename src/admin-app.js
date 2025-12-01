function goToCustomer() {
    window.location.href = 'index.html';
}

function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (username === 'admin' && password === '123') {
        document.getElementById('login-panel').classList.add('hidden');
        document.getElementById('admin-panel').classList.remove('hidden');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        loadAdminPanel();
    } else {
        alert('Hatalı kullanıcı adı veya şifre! Kullanıcı: admin, Şifre: 123');
    }
}

function logout() {
    document.getElementById('admin-panel').classList.add('hidden');
    document.getElementById('login-panel').classList.remove('hidden');
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', function() {
    orders = loadFromDatabase('orders');
});
