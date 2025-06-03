# 1. Dil ve Gramer Seçimi

## 1.1 Kullanılan Programlama Dili

Projede JavaScript kullanılmıştır. JavaScript, hem istemci tarafında çalışabilen hem de geniş topluluk desteği olan bir dil olduğu için tercih edilmiştir. Tarayıcı üzerinde doğrudan çalışabilmesi sayesinde kullanıcı herhangi bir kurulum yapmadan sözdizimi vurgulayıcıyı deneyimleyebilir.

## 1.2 Desteklenen Yapılar

* **Değişken tanımlama:** `let`, `const`, `var`
* **Yazdırma:** `print()` fonksiyonu
* **Koşullu ifadeler:** `if`, `else`
* **Karakter dizileri ve sayılar**
* **Operatörler:** `+`, `-`, `*`, `/`, `=`, `==`, `!=`, `<`, `>` vb.

## 1.3 Kullanılan Gramer

Top-down parsing yaklaşımı benimsenmiştir. Bu yaklaşım, gramerin kolay okunabilir ve manuel olarak uygulanabilir olmasını sağlar. Kodun yapısı parça parça incelenerek parse edilir.

---

# 2. Sözdizim Analizi Süreci

## 2.1 Lexical Analyzer (Tokenizer)- State Diagram & Program Implementation

Tokenizer, kullanıcıdan alınan kodu aşağıdaki gruplara ayırır:

* **Anahtar kelimeler:** `let`, `if`, `else`, `print`
* **Tanımlayıcılar:** değişken isimleri
* **Operatörler:** `=`, `+`, `-`, vb.
* **Sayısal değerler**
* **Semboller:** `(`, `)`, `{`, `}`, `;`

Kod örneği:

```javascript
const regex = /\s+|\/\/.*|".*?"|'.*?'|\d+|[a-zA-Z_$][\w$]*|==|!=|<=|>=|=>|[=+\-*/<>!&|;,.{}()[\]]/g;
```

## 2.2 Syntax Analyzer (Parser)

Parser, token'ları gramer kurallarına göre analiz eder ve geçerli yapıların olup olmadığını kontrol eder.

Top-down yaklaşımıyla çalışan `parseStatement`, `parseVarDecl`, `parsePrint`, `parseIf` gibi fonksiyonlarla gramer kontrolü yapılır.

---

# 3. Token Tanımları

## 3.1 Token Türleri

| Token Türü    | Açıklama               |
| ------------- | ---------------------- |
| `keyword`     | Anahtar kelimeler      |
| `identifier`  | Değişken adları        |
| `number`      | Sayısal sabitler       |
| `string`      | Karakter dizileri      |
| `operator`    | +, -, \*, /, = vb.     |
| `punctuation` | Noktalama karakterleri |
| `comment`     | Açıklama satırları     |

## 3.2 Tokenizer Kullanımı

Tokenizer çıktısı bir dizi token nesnesidir. Her biri şu alanları içerir:

* `type`: Token türü
* `value`: Orijinal kaynak kod parçası

---

# 4. Parser Fonksiyonları

## 4.1 Top-Down Yöntemi

Parser, yukarıdan aşağıya çalışır. Yani önce genel yapı (örneğin bir ifade veya blok) tanımlanır, sonra alt bileşenlere ayrılır.

## 4.2 Fonksiyon Açıklamaları

* **parseVarDecl()**: `let x = 5;` gibi tanımları işler.
* **parsePrint()**: `print("Hello");` gibi satırları işler.
* **parseIf()**: `if (...) { ... }` yapısını ve varsa `else` kısmını işler.
* **parseStatement()**: Yukarıdaki fonksiyonları çağırarak genel yapıyı kontrol eder.

---

# 5. GUI ve Gerçek Zamanlı Vurgulama

## 5.1 Kullanıcı Arayüzü

Kullanıcı, bir metin kutusuna kodunu yazar. Kod yazıldıkça `tokenizer.js` dosyası ile analiz yapılır ve `highlightCode()` fonksiyonu ile vurgulama yapılır.

## 5.2 CSS Stil Tanımları

Kod vurgulama stilleri CSS ile tanımlanmıştır:

```css
.keyword     { color: #00ffff; }
.identifier  { color: #ffffff; }
.operator    { color: #ff00ff; }
.number      { color: #ffff00; }
.string      { color: #00ff00; }
.comment     { color: #888888; font-style: italic; }
```

---

# 6. Sonuç

Bu projede, kullanıcı dostu ve gerçek zamanlı bir sözdizimi vurgulayıcı geliştirildi. JavaScript ile yazılan bu uygulama, dil tanıma, token üretme ve gramer kontrolü adımlarını modüler şekilde gerçekleştiriyor. Kullanıcı arayüzü, kolay kullanım ve görsel vurgularla öğrenmeyi destekliyor.

