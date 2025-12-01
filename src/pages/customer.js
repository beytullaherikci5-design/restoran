function loadCustomerPanel() {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';
    
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p>${item.category}</p>
            </div>
            <div>
                <span class="price">${item.price}₺</span>
                <button onclick="addToCart(${item.id})">Sepete Ekle</button>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });
    
    updateCartDisplay();
}