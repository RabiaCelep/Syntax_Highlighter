// Basit bir tokenizer'dan gelen token'ları parse eden örnek parser.js

let position = 0;
let tokens = [];
let errors = [];

function current() {
  return tokens[position];
}

function consume(expectedTypeOrValue) {
  const token = current();
  if (!token) {
    errors.push({ message: `Unexpected end of input, expected ${expectedTypeOrValue}` });
    return null;
  }

  // Basit kontrol: expectedTypeOrValue token türü veya değeri olabilir
  if (token.type === expectedTypeOrValue || token.value === expectedTypeOrValue) {
    position++;
    return token;
  } else {
    errors.push({ message: `Expected ${expectedTypeOrValue}, got ${token.type}:${token.value}`, token });
    return null;
  }
}

function parseVarDecl() {
  // let <identifier> = <expression>;
  consume("let");
  const id = consume("identifier");
  consume("=");
  parseExpression();
  consume(";");
}

function parsePrint() {
  // print(<expression>);
  consume("print");
  consume("(");
  parseExpression();
  consume(")");
  consume(";");
}

function parseIf() {
  consume("if");
  consume("(");
  parseExpression();
  consume(")");

  consume("{");
  while (current() && current().value !== "}") {
    parseStatement();
  }
  consume("}");

  if (current()?.value === "else") {
    consume("else");
    consume("{");
    while (current() && current().value !== "}") {
      parseStatement();
    }
    consume("}");
  }
}

// Basit expression parser (sadece örnek, geliştirilebilir)
function parseExpression() {
  // Şimdilik sadece identifier, number veya string bekleyelim
  const token = current();
  if (!token) {
    errors.push({ message: "Unexpected end of input in expression" });
    return;
  }

  if (
    token.type === "identifier" ||
    token.type === "number" ||
    token.type === "string"
  ) {
    position++;
  } else {
    errors.push({ message: `Unexpected token in expression: ${token.type}:${token.value}`, token });
    position++;
  }
}

function parseStatement() {
  const token = current();
  if (!token) return;

  if (token.value === "let") {
    parseVarDecl();
  } else if (token.value === "print") {
    parsePrint();
  } else if (token.value === "if") {
    parseIf();
  } else {
    errors.push({ message: "Unknown statement", token });
    position++;
  }
}

function parseProgram(inputTokens) {
  position = 0;
  tokens = inputTokens;
  errors = [];

  while (position < tokens.length) {
    parseStatement();
  }

  return { errors };
}

// Export veya module yoksa global fonksiyon olarak kalabilir

