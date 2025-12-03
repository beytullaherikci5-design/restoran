function addToCart(itemId) {
    const item = menuItems.find(m => m.id === itemId);
    const existingItem = cart.find(c => c.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    saveToDatabase('cart', cart);
    updateCartDisplay();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveToDatabase('cart', cart);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Sepet boş</p>';
        return;
    }
    
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <span>${item.price * item.quantity}₺</span>
            <button onclick="removeFromCart(${item.id})">Sil</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });
    
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<strong>Toplam: ${total}₺</strong>`;
    cartItems.appendChild(totalDiv);
}

async function createOrder() {
    if (cart.length === 0) {
        alert('Sepet boş!');
        return;
    }
    
    const orderBtn = document.getElementById('order-btn');
    orderBtn.textContent = 'Sipariş Veriliyor...';
    orderBtn.disabled = true;
    
    try {
        const order = {
            id: Date.now(),
            items: [...cart],
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            time: new Date().toLocaleTimeString('tr-TR')
        };
        
        await createOrderAPI(order);
        cart = [];
        saveToDatabase('cart', cart);
        updateCartDisplay();
        alert('Sipariş başarıyla oluşturuldu!');
    } catch (error) {
        console.error('Sipariş hatası:', error);
        alert('Sipariş verilirken hata oluştu. Lütfen tekrar deneyin.');
    } finally {
        orderBtn.textContent = 'Sipariş Ver';
        orderBtn.disabled = false;
    }
}