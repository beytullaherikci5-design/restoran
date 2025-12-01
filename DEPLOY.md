# Deployment Rehberi

## Gereksinimler

### 1. MongoDB Atlas Hesabı
1. https://www.mongodb.com/cloud/atlas adresine gidin
2. Ücretsiz hesap oluşturun
3. Yeni bir cluster oluşturun (M0 Free Tier)
4. Database Access bölümünden yeni kullanıcı oluşturun
5. Network Access bölümünden "Allow Access from Anywhere" (0.0.0.0/0) ekleyin
6. "Connect" butonuna tıklayıp connection string'i kopyalayın
   - Örnek: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/`

### 2. Vercel Hesabı
1. https://vercel.com adresine gidin
2. GitHub hesabınızla giriş yapın

## Deployment Adımları

### 1. GitHub Repository Oluşturma
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/yemek-siparis.git
git push -u origin main
```

### 2. Vercel'e Deploy
1. Vercel dashboard'a gidin
2. "New Project" butonuna tıklayın
3. GitHub repository'nizi seçin
4. Environment Variables bölümüne ekleyin:
   - Key: `MONGODB_URI`
   - Value: MongoDB connection string'iniz
5. "Deploy" butonuna tıklayın

### 3. Test
- Deploy tamamlandığında verilen URL'yi açın
- Müşteri panelinde sipariş verin
- Admin panelinde siparişleri görüntüleyin

## Notlar
- Her git push otomatik olarak yeniden deploy edilir
- Environment variables Vercel dashboard'dan güncellenebilir
- MongoDB Atlas'ta database adı: `yemek-siparis`
