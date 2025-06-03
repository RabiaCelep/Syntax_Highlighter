JavaScript Gerçek Zamanlı Sözdizimi Vurgulayıcı
📌 Dil ve Gramer Seçimi
Kullanılan Programlama Dili
Bu projede JavaScript dilinin basitleştirilmiş bir alt kümesi kullanılmaktadır. JavaScript tercih edilmesinin nedenleri:

Hem istemci (frontend) hem de sunucu (backend) tarafında yaygın olarak kullanılır.

Projede kullanılan GUI ve sözdizimi analiz araçları da JavaScript ile yazıldığı için, analiz edilen dil ile analiz aracı arasında tutarlılık sağlanır.

Desteklenen Yapılar
Aşağıdaki temel yapılar desteklenmektedir:

let ile değişken tanımlama

print() fonksiyonu

if / else koşullu yapılar

Temel veri türleri: number, string, identifier

Kullanılan Gramer (Bağlamdan Bağımsız)
mathematica
Kopyala
Düzenle
Program     → Statement*
Statement   → VarDecl | PrintStmt | IfStmt
VarDecl     → "let" identifier "=" Expression ";"
PrintStmt   → "print" "(" Expression ")" ";"
IfStmt      → "if" "(" Expression ")" Block ["else" Block]
Block       → "{" Statement* "}"
Expression  → identifier | number | string
🔍 Sözdizim Analizi Süreci
1. Lexical Analyzer (Tokenizer)
Kod parçaları, tokenize() fonksiyonu ile analiz edilir. Kullanılan regex:

js
Kopyala
Düzenle
const regex = /\s+|\/\/.*|".*?"|'.*?'|\d+|[a-zA-Z_$][\w$]*|==|!=|<=|>=|=>|[=+\-*/<>!&|;,.{}()[\]]/g;
Tanınan Token Türleri
Tür	Açıklama
keyword	let, if, else, print
identifier	Değişken/fonksiyon adları
number	Sayısal değerler
string	"..." veya '...'
operator	+, =, >, == vb.
punctuation	;, (, ), {, } vb.
comment	// ile başlayan yorum satırları

2. Syntax Analyzer (Parser)
Top-down yaklaşımıyla çalışan parser, aşağıdaki fonksiyonlarla tanımlanır:

Fonksiyon	Açıklama
parseProgram()	Tüm programı işler, parseStatement() çağırır.
parseStatement()	Gelen token'a göre uygun analiz fonksiyonunu seçer.
parseVarDecl()	let tanımlarını analiz eder.
parsePrint()	print() ifadelerini işler.
parseIf()	if/else bloklarını işler.
parseExpression()	Temel ifadeleri çözümler.

Parser Neden Top-Down?
Öğrenci projeleri için okunabilir ve kolay hata ayıklanabilir.

Küçük gramerler için idealdir.

parseX() fonksiyonları ile gramer kuralları birebir eşleştirilebilir.

🧱 Tokenization ve Highlighting
Gerçek Zamanlı Vurgulama
Kullanıcı kod yazdıkça tokenize() çalışır.

Her token, uygun CSS sınıfıyla <span class="tokenType">...</span> etiketine dönüştürülür.

highlightedCode adlı <pre> bloğunda gösterilir.

Aynı anda parse() fonksiyonu ile sözdizim hataları kontrol edilir.

CSS Vurgulama Stilleri
css
Kopyala
Düzenle
.keyword     { color: #00ffff; }
.identifier  { color: #ffffff; }
.number      { color: #ffcc00; }
.operator    { color: #ff6666; }
.punctuation { color: #999999; }
.comment     { color: #888888; font-style: italic; }
.string      { color: #ffa07a; }
🖥️ Arayüz (GUI) Detayları
Kullanılan Teknolojiler
HTML5: Sayfa yapısı

CSS: Stil ve tema

JavaScript: Tokenizer ve parser

Temel Elemanlar
Eleman	Açıklama
<textarea>	Kod yazılan alan
<pre id="highlightedCode">	Renklendirilmiş çıktının gösterildiği alan
<script> etiketleri	Tokenizer ve parser JS dosyaları dahil edilmiştir.

Stil (CSS)
css
Kopyala
Düzenle
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
✅ Sonuç
Bu proje, kullanıcıya yazdığı kodun anında analizini ve görsel olarak vurgulanmasını sağlayan bir sistem sunar. Hem eğitim amaçlı hem de geliştiriciler için faydalı bir araç olarak tasarlanmıştır. Her kod değişikliğinde hem sözcüksel analiz hem de sözdizim kontrolü yapılır ve kullanıcıya hatalar anında gösterilir.
