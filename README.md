# Gerçek Zamanlı JavaScript Sözdizimi Vurgulayıcı(Makale)

## 📌 Giriş

Programlama dilleri dersinde gerçekleştirilen bu proje, temel amacı gerçek zamanlı sözdizimi vurgulama yapan bir uygulama geliştirmektir.  
Sözdizimi vurgulama, kod okunabilirliğini artırarak geliştiricinin hata yapma ihtimalini azaltır.

> Not: Projede harici kütüphane kullanımı yasak olduğundan, tüm analizler kendi yazdığımız kodlarla gerçekleştirilmiştir.

---

## 🛠️ Teknik Altyapı

Projede **JavaScript** dili tercih edilmiştir. Bu dilin web ortamında çalışabilmesi, kolayca interaktif arayüz geliştirmeye imkân sağlamıştır.  

Ayrıca:
- **HTML** ile yapısal arayüz kurulmuş
- **CSS** ile görsel düzenlemeler yapılmıştır
- **Düzenli ifadeler (RegEx)** ile sözcüksel analiz yapılmış
- **Recursive descent parser** ile sözdizimsel analiz gerçekleştirilmiştir

---

## 🧩 Proje Tasarımı

### 🔹 Sözcüksel Analiz (Tokenizer)
Kod; anahtar kelimeler, sayılar, operatörler, yorumlar gibi token türlerine ayrılmıştır.

### 🔹 Sözdizimsel Analiz (Parser)
Token'lar üzerinde kurallar doğrultusunda doğruluk kontrolü yapılmıştır.  
Desteklenen yapılar:
- Basit değişken tanımlamaları
- Koşul ifadeleri (`if`, `else`)
- Çıktı komutları (`print`)

### 🔹 Vurgulama
Her token türü için özel CSS sınıfları tanımlanarak renkli HTML etiketleri ile gösterim yapılmıştır.

### 🔹 Arayüz
Kullanıcı dostu bir `textarea` aracılığıyla yazılan kodun hemen altında **renkli sözdizimi çıktısı** gösterilmektedir.

---

## ⚡ Gerçek Zamanlı Vurgulama Sistemi

Kullanıcı her tuş bastığında:
1. Kod **tokenize** edilir
2. Ardından **parse** edilir

Bu sistem sayesinde:
- Anında sözdizimi vurgulaması sağlanır
- Hatalar anında kullanıcıya gösterilir

> Bu yaklaşım, kullanıcı deneyimini artırır ve hataların erken fark edilmesini sağlar.

---

## 🧠 Sözdizim Analizi

Parser, **recursive descent** yöntemiyle yazılmıştır.  
Desteklenen yapılar:
- Değişken tanımlamaları (`let x = 5;`)
- Koşullu ifadeler (`if`, `else` blokları)
- `print()` fonksiyonu

Parser, hatalı veya beklenmedik token’ları tespit ederek kullanıcıya açıkça bildirir.

---

## 🎨 Arayüz Geliştirme Süreci

- **Tema**: Sade ve karanlık (dark theme)
- **Giriş Alanı**: HTML `textarea`
- **Stil**: CSS ile yazı tipleri, arka plan ve renkler
- **İşlevsellik**: JavaScript ile gerçek zamanlı analiz ve vurgulama işlemleri

---

## 🧱 Zorluklar ve Çözüm Yolları

- **Zorluk**: Tokenizer ile parser'ın uyumlu çalışmasını sağlamak
- **Zorluk**: Gerçek zamanlı performansı korumak
- **Zorluk**: Kullanıcının yazdığı ham kodun güvenli şekilde işlenmesi (HTML escape)

**Çözüm Yolları:**
- Modüler yapı
- Regex sadeleştirmeleri
- HTML injection engelleyen `escapeHTML()` fonksiyonları

---

## ✅ Sonuç ve Gelecek Çalışmalar

Bu proje:
- Temel **sözcüksel** ve **sözdizimsel** analizleri
- **Gerçek zamanlı vurgulama** ile birleştirmiştir
- Eğitim ve öğretim amacıyla etkili bir araçtır

### 🔮 Gelecek Çalışmalar:
- Daha karmaşık gramer yapılarının desteklenmesi
- Yeni dil özelliklerinin eklenmesi (örnek: döngüler, fonksiyonlar)
- Performans optimizasyonları
- Gelişmiş kullanıcı arayüzü tasarımları

---

## 🎥 Demo Videosu

👉 Projenin demo videosuna aşağıdaki bağlantıdan ulaşabilirsiniz:  
🔗 [YouTube Video Linki](https://www.youtube.com/watch?v=mjfeDEfb7J8)
