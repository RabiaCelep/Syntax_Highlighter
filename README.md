Giriş

Programlama dilleri dersinde gerçekleştirilen bu proje, temel amacı gerçek zamanlı sözdizimi vurgulama yapan bir uygulama geliştirmektir. Sözdizimi vurgulama, kod okunabilirliğini artırarak geliştiricinin hata yapma ihtimalini azaltır. Projede, harici kütüphane kullanımı yasak olduğundan, tüm analizler kendi yazdığımız kodlarla gerçekleştirilmiştir.

Teknik Altyapı

Projede JavaScript dili tercih edilmiştir. Bu dilin web ortamında çalışabilmesi, kolayca interaktif arayüz geliştirmeye imkan sağlamıştır. Ayrıca HTML ve CSS kullanılarak görsel düzenleme yapılmıştır. Sözcüksel analiz için düzenli ifadeler (RegEx) kullanılmış, sözdizimsel analiz için ise basit bir recursive descent parser uygulanmıştır.

Proje Tasarımı

Sözcüksel Analiz (Tokenizer): Kod, anahtar kelimeler, sayılar, operatörler, yorumlar gibi token türlerine ayrılmıştır.

Sözdizimsel Analiz (Parser): Tokenlar üzerinde kurallar doğrultusunda doğruluk kontrolü yapılmıştır. Basit değişken tanımlamaları, koşul ifadeleri ve çıktı komutları desteklenmiştir.

Vurgulama: Her token türü için ayrı renk sınıfları belirlenmiş ve HTML içinde renkli <span> etiketleriyle gösterilmiştir.

Arayüz: Kullanıcı dostu bir textarea ile yazılan kodun hemen altında renkli çıktı gösterilmiştir.

Gerçek Zamanlı Vurgulama Sistemi

Kullanıcı her tuş basımında kod tokenize edilir ve parse edilir. Bu sayede hem anında sözdizimi vurgulaması sağlanır, hem de olası hatalar kullanıcıya anında gösterilir. Bu yaklaşım, kullanıcı deneyimini artırır ve hataların erken fark edilmesini sağlar.

Sözdizim Analizi

Parser, recursive descent yöntemi ile yazılmıştır. Değişken tanımlamaları, if-else blokları ve print fonksiyonları örnek olarak ele alınmıştır. Hatalı veya beklenmedik tokenlar tespit edilip kullanıcıya bildirilmiştir.

Arayüz Geliştirme Süreci

Arayüzde sade ve karanlık temalı bir tasarım tercih edilmiştir. HTML textarea kullanılarak kullanıcıdan giriş alınmış, CSS ile renkler ve yazı tipleri belirlenmiştir. JavaScript ile gerçek zamanlı analiz ve vurgulama gerçekleştirilmiştir.

Zorluklar ve Çözüm Yolları

Proje süresince en büyük zorluk, istenen tüm analiz adımlarını doğru şekilde ve entegre biçimde yapmaktı. Tokenizer ile parser’ın uyumu ve gerçek zamanlı performansın korunması üzerinde çalışılmıştır. Ayrıca kullanıcıdan alınan ham kodun güvenli bir şekilde işlenmesi için HTML kaçış işlemleri yapılmıştır.

Sonuç ve Gelecek Çalışmalar

Bu proje, temel sözcüksel ve sözdizimsel analizleri gerçek zamanlı vurgulama ile birleştiren başarılı bir uygulama sunmaktadır. Gelecekte daha karmaşık gramerler ve daha fazla dil özelliği desteklenebilir. Ayrıca performans optimizasyonları ve kullanıcı arayüzü iyileştirmeleri yapılabilir.

Projenin demo videosu bu linkten ulaşabilirsiniz: https://www.youtube.com/watch?v=mjfeDEfb7J8
