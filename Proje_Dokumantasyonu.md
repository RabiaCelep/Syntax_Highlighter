 Dil ve Gramer Seçimi
Kullanılan Programlama Dili

Bu projede, basitleştirilmiş bir JavaScript dil alt kümesi hedeflenmiştir. JavaScript tercih edilmesinin başlıca iki nedeni şunlardır:
1.	Hem istemci (frontend) hem de sunucu (backend) tarafında yaygın olarak kullanılan bir dildir.
2.	Gerçek zamanlı sözdizimi vurgulayıcısı ve grafik arayüz (GUI) JavaScript ile geliştirildiğinden, dilin kendisini analiz etmek ve görselleştirmek açısından tutarlılık sağlar.
Desteklenen Yapılar

Proje kapsamında tanımlayıcı basit JavaScript yapıları desteklenmektedir:
•	let anahtar kelimesiyle değişken tanımlama
•	print() fonksiyonu ile çıktı verme
•	if ve else ile koşullu ifadeler
•	Temel veri türleri: sayı (number), metin (string) ve tanımlayıcı (identifier)
Gramer (Bağlamdan Bağımsız Dilbilgisi)

Proje için kullanılan basit bağlamdan bağımsız gramer aşağıdaki gibidir:
Program         → Statement*
Statement       → VarDecl | PrintStmt | IfStmt
VarDecl         → "let" identifier "=" Expression ";"
PrintStmt       → "print" "(" Expression ")" ";"
IfStmt          → "if" "(" Expression ")" Block ["else" Block]
Block           → "{" Statement* "}"
Expression      → identifier | number | string
Bu gramer kuralları, gerçek zamanlı hataları belirlemek üzere yukarıdan aşağıya (top-down) çalışan bir sözdizim çözücü (parser) geliştirmek için uygundur.
Tanınan Token Türleri

Lexical analyzer (tokenizer), aşağıdaki token türlerini tanıyacak şekilde tasarlanmıştır:
•	keyword → Anahtar kelimeler (let, if, else, print vb.)
•	identifier → Değişken veya fonksiyon adları
•	number → Sayısal değerler (örneğin 42)
•	string → Metin değerleri (örneğin "merhaba")
•	operator → Operatörler (=, +, >, == vb.)
•	punctuation → Noktalama karakterleri (;, (, ), {, } vb.)
•	comment → Yorum satırları (// yorum)
________________________________________
 Sözdizim Analizi Süreci
 
Sözdizim analizi, yazılan kodun programlama dilinin kurallarına uygun olup olmadığını denetleyen bir süreçtir. Bu projede, sözdizim analizi iki ana bileşene ayrılmıştır:
1. Lexical Analyzer (Sözcüksel Çözümleyici)
   
Sözcüksel analiz, kullanıcının yazdığı kaynak kodu token adı verilen anlamlı parçalara bölme işlemidir. Bu işlem, tokenize() fonksiyonu ile gerçekleştirilmiştir.
Kullanılan düzenli ifadeler (regex) yardımıyla tanınan bazı öğeler:

•	Anahtar kelimeler: let, if, else, print, vb.
•	Tanımlayıcılar (identifier): değişken adları gibi
•	Sayılar: 5, 100 vb.
•	Metinler: "merhaba" gibi string ifadeler
•	Operatörler: =, +, >, ==, vb.
•	Noktalama: ;, (, ), {, } gibi yapılar
•	Yorumlar: // ile başlayan satırlar
Tokenlar, kullanıcı her giriş yaptığında anında üretilir ve sonraki aşama olan parser'a aktarılır.
3. Syntax Analyzer (Sözdizim Çözümleyici)

Sözdizim çözümleme aşamasında, tokenlardan oluşan akış bir top-down parser kullanılarak analiz edilir. Bu çözümleyici, tanımlanmış bir bağlamdan bağımsız gramer kurallarına göre kodun yapısını kontrol eder.
Yapı şu şekilde işler:
•	parseStatement(): Gelen token türüne göre uygun analiz fonksiyonunu çağırır.
•	parseVarDecl(): Değişken tanımlarını analiz eder.
•	parsePrint(): Print ifadelerini çözümler.
•	parseIf(): If-else bloklarını inceler.
•	parseExpression(): İfadelerin türünü (değişken, sayı, string) kontrol eder.
•	errors[]: Hatalar burada toplanır ve kullanıcıya gösterilir.
________________________________________
 Sözcüksel Analiz Detayları (Lexical Analysis Details)
 
Kullanılan Yöntem:
 State Diagram & Program Implementation yaklaşımı tercih edilmiştir.
Bu yaklaşımda, bir durum diyagramı (state machine) mantığı yazılım ile kodlanarak uygulanır. Yani tokenlar doğrudan programatik olarak, düzenli ifadelerle tanımlanan kurallara göre çıkarılır.
Tokenization Süreci
Tokenize işlemi tokenize(code) fonksiyonu ile gerçekleştirilmiştir. Bu fonksiyonun temel görevi; kaynak kodu sırayla okuyarak tokenlara ayırmak ve her token’a ait türleri belirlemektir.
Kullanılan düzenli ifade:
const regex = /\s+|\/\/.*|".*?"|'.*?'|\d+|[a-zA-Z_$][\w$]*|==|!=|<=|>=|=>|[=+\-*/<>!&|;,.{}()[\]]/g;
Bu ifade sayesinde şu tür yapılar ayrıştırılır:
•	Boşluklar ve yorumlar (yok sayılır)
•	String ifadeler ("metin" veya 'metin')
•	Sayılar (123)
•	Tanımlayıcılar (değişkenAdı)
•	Anahtar kelimeler (let, if, else, vs.)
•	Operatörler (=, +, ==, >=, vs.)
•	Noktalama işaretleri (;, (, ), {, })
Token Türleri
Her token, analiz sonunda bir nesne olarak döner:
{ type: "keyword", value: "let" }
Aşağıdaki türler desteklenmektedir:
•	keyword: let, if, else, return vb.
•	identifier: Değişken veya fonksiyon adları
•	number: Sayısal sabitler
•	string: Metin ifadeleri (çift veya tek tırnaklı)
•	operator: Matematiksel ve mantıksal işleçler
•	punctuation: Noktalama karakterleri
•	comment: Satır yorumları
Gerçek Zamanlı Çalışma
Her kod girişinde kullanıcı arayüzü otomatik olarak tokenize() fonksiyonunu çağırır. Tokenlar hem vurgulama (highlighting) hem de sözdizim analizine girdi olarak aktarılır.
Güvenlik (HTML Kaçışlama)
Kodun düzgün ve güvenli biçimde gösterilmesi için escapeHTML() fonksiyonu kullanılmaktadır. Bu fonksiyon sayesinde <, >, & gibi HTML karakterleri güvenli hale getirilir.
________________________________________
 Ayrıştırma Yöntemi (Parsing Methodology)
 
Seçilen Yöntem:
 Top-Down Parser (Yukarıdan Aşağıya Ayrıştırma) yöntemi uygulanmıştır.
Bu yöntem, kaynak kodun yapısını öncelikli olarak kökten (program seviyesinden) başlayarak dallara ayırır. Yani, üretim kuralları doğrultusunda satırlar sırayla incelenir ve bir öncelikli (preorder) çözümleme yapılır.
________________________________________
Kullanılan Gramer Kuralları (Basitleştirilmiş)

Kullanıcının yazabileceği program, aşağıdaki gibi bazı temel kurallarla tanımlanmıştır:
program       → statement*
statement     → varDecl | printStmt | ifStmt
varDecl       → "let" identifier "=" expression ";"
printStmt     → "print" "(" expression ")" ";"
ifStmt        → "if" "(" expression ")" block ["else" block]
block         → "{" statement* "}"
expression    → identifier | number | string
Bu kurallar, parser.js dosyasında aşağıdaki fonksiyonlarla uygulanmaktadır:
________________________________________
Fonksiyon Açıklamaları

Fonksiyon	Açıklama
parseProgram()	Tüm token akışını döngüyle işler, her ifadeyi parseStatement() ile ayrıştırır.
parseStatement()	Gelen token’a göre hangi yapının analiz edileceğine karar verir: let, print, if.
parseVarDecl()	Değişken tanımlama satırlarını işler: let x = 5;
parsePrint()	print(...) ifadelerini işler.
parseIf()	Koşullu blokları ve varsa else kısmını ayrıştırır.
parseExpression()	Şimdilik sadece temel ifadeleri (identifier, number, string) işler. Geliştirilebilir.
Neden Top-Down Parser?
•	Öğrenci projeleri için daha okunabilir ve hata ayıklaması kolaydır.
•	Küçük gramerlerde etkili çalışır.
•	parseX() fonksiyonları ile gramer kuralları birebir eşleştirilebilir.

 Vurgulama Şeması (Highlighting Scheme)
 
Hedef:
Kullanıcının yazdığı kaynak kodu, sözcüksel analiz (tokenization) sonucunda elde edilen token türlerine göre gerçek zamanlı olarak renklendirmektir. Böylece kullanıcı, yazdığı kodun yapısını görsel olarak hızlıca algılayabilir.
________________________________________
Desteklenen Token Türleri ve Stilleri:
.keyword     { color: #00ffff; }     /* Anahtar kelimeler */
.identifier  { color: #ffffff; }     /* Değişken ve fonksiyon adları */
.number      { color: #ffcc00; }     /* Sayılar */
.operator    { color: #ff6666; }     /* + - * / = gibi işleçler */
.punctuation { color: #999999; }     /* ; , { } ( ) gibi işaretler */
.comment     { color: #888888; font-style: italic; } /* // ile başlayan yorumlar */
.string      { color: #ffa07a; }     /* "metin" veya 'metin' ifadeleri */
Bu sınıflar, HTML <span> etiketleri ile işaretlenmiş şekilde highlightedCode adlı <pre> alanında gösterilmektedir:
<span class="keyword">let</span>
<span class="identifier">x</span>
<span class="operator">=</span>
<span class="number">42</span>
<span class="punctuation">;</span>
________________________________________
Gerçek Zamanlı Vurgulama

Kullanıcı textarea içine her karakter yazdığında:
1.	tokenize() fonksiyonu çalışır.
2.	Token'lar, ilgili CSS sınıfı ile <span> etiketlerine dönüştürülür.
3.	Tüm çıktılar, highlightedCode bölümüne HTML olarak yazılır.
4.	Aynı anda parse() fonksiyonu çağrılarak sözdizim hataları kontrol edilir ve varsa altına hata mesajı olarak yazılır.
Arayüz Uygulaması (GUI Implementation)
Amaç:
Projenin amacı, kullanıcı dostu ve gerçek zamanlı çalışan bir arayüz tasarlayarak yazılan kodun anında sözdizimi vurgulanmış şekilde görüntülenmesini sağlamaktır. Bu, hem eğitimsel hem de geliştirici deneyimi açısından büyük önem taşır.
________________________________________
Kullanılan Teknolojiler:

•	HTML5 – Arayüzün temel iskeletini oluşturur.
•	CSS – Kod alanı, yazı tipleri ve vurgulama stilleri için.
•	JavaScript – Girişin analiz edilmesi, vurgulanması ve hataların gösterilmesi için.
________________________________________
Arayüz Elemanları:

Eleman	Açıklama
<textarea>	Kullanıcının kod yazdığı editör alanı. Gerçek zamanlı analiz yapılır.
<pre id="highlightedCode">	Vurgulama yapılan çıktının gösterildiği alan. HTML olarak yazılır.
<script> etiketleri	Tokenizer ve parser dosyaları ayrı script dosyaları olarak yüklenmiştir.
________________________________________
Gerçek Zamanlı Çalışma Mantığı:

1.	Kullanıcı <textarea> içine kod yazar.
2.	input olayında JavaScript çalışır.
3.	tokenize() fonksiyonu ile kod parçalara ayrılır.
4.	Her token tipi için <span class="tokenType">...</span> HTML üretimi yapılır.
5.	Üretilen HTML çıktısı, highlightedCode adlı <pre> içine yazılır.
6.	Aynı anda parse() fonksiyonu çalıştırılarak sözdizim hataları analiz edilir.
7.	Hatalar varsa kırmızı renkte, <pre> alanına eklenir.
________________________________________
CSS ile Stil Tasarımı:

Karanlık temalı bir görünüm tercih edilmiştir:
body {
  font-family: monospace;
  background: #222;
  color: white;
}
textarea {
  background: #333;
  color: white;
  border: none;
}
pre {
  background: #111;
  border-radius: 5px;
  padding: 10px;
}
Kod görünümünde vurgulama renkleri, geliştiricinin token türlerini daha hızlı ayırt etmesini sağlar.
________________________________________
Sonuç
  
Bu basit ama işlevsel GUI, projenin kullanıcı deneyimini artıran ve sözdizimi vurgulamasını anında yansıtan temel yapı taşıdır. Her kod değişikliğinde otomatik analiz yapılır ve kullanıcıya anlık geri bildirim sağlanır.
