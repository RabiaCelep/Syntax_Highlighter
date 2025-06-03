const KEYWORDS = [
  "let", "const", "var", "if", "else", "for", "while", "do",
  "function", "return", "true", "false", "null", "undefined"
];

function tokenize(code) {
  const tokens = [];
  const regex = /\s+|\/\/.*|".*?"|'.*?'|\d+|[a-zA-Z_$][\w$]*|==|!=|<=|>=|=>|[=+\-*/<>!&|;,.{}()[\]]/g;
  let match;

  while ((match = regex.exec(code)) !== null) {
    const value = match[0];
    if (/^\s+$/.test(value)) continue;

    let type = "identifier";
    if (KEYWORDS.includes(value)) {
      type = "keyword";
    } else if (/^\d+$/.test(value)) {
      type = "number";
    } else if (/^".*"$|^'.*'$/.test(value)) {
      type = "string";
    } else if (/^\/\//.test(value)) {
      type = "comment";
    } else if (/^[=+\-*/<>!&|]+$/.test(value)) {
      type = "operator";
    } else if (/^[;,.{}()[\]]$/.test(value)) {
      type = "punctuation";
    }

    tokens.push({ type, value });
  }

  return tokens;
}


