const menuItems = [
    { id: 1, name: "Makarna", price: 45, category: "Ana Yemek" },
    { id: 2, name: "Sezar Salata", price: 35, category: "Salata" },
    { id: 3, name: "Tavuk Şiş", price: 65, category: "Ana Yemek" },
    { id: 4, name: "Patlıcan Kebabı", price: 70, category: "Ana Yemek" },
    { id: 5, name: "Sultan Kebabı", price: 85, category: "Ana Yemek" },
    { id: 6, name: "Maden Suyu", price: 8, category: "İçecek" },
    { id: 7, name: "Bira", price: 25, category: "İçecek" }
];

// Local Database Functions
function saveToDatabase(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadFromDatabase(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

let cart = loadFromDatabase('cart');
let orders = loadFromDatabase('orders');