# Lokanta Yemek Sipariş Sistemi

## Proje Açıklaması
Bu proje, lokanta için basit bir yemek sipariş sistemidir. Müşteriler QR kod ile erişebilir ve siparişlerini verebilir. Admin panelinde siparişler görüntülenir ve tamamlandığında silinebilir.

## Özellikler
- Müşteri paneli: Menü görüntüleme ve sipariş verme
- Admin paneli: Siparişleri görüntüleme ve tamamlama
- Sepet yönetimi
- Gerçek zamanlı sipariş takibi

## Kullanım
1. `index.html` dosyasını tarayıcıda açın
2. Müşteri panelinde menüden ürün seçin ve sepete ekleyin
3. "Sipariş Ver" butonuna tıklayın
4. "Admin Panel" butonuna tıklayarak admin paneline geçin
5. Siparişleri görüntüleyin ve hazır olanları silin

## Dosya Yapısı
```
├── index.html              # Ana HTML dosyası
├── public/
│   └── style.css           # CSS stilleri
├── src/
│   ├── data/
│   │   └── menu.js         # Menü verileri
│   ├── components/
│   │   ├── cart.js         # Sepet işlevleri
│   │   └── orders.js       # Sipariş yönetimi
│   ├── pages/
│   │   ├── customer.js     # Müşteri paneli
│   │   └── admin.js        # Admin paneli
│   └── app.js              # Ana uygulama
└── README.md               # Bu dosya
```

## Menü İçeriği
- Makarna (45₺)
- Sezar Salata (35₺)
- Tavuk Şiş (65₺)
- Patlıcan Kebabı (70₺)
- Sultan Kebabı (85₺)
- Maden Suyu (8₺)
- Bira (25₺)