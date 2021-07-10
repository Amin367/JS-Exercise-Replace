
let sentence = "I am web developer and I am senior";

statement.replace("developer","student").replace("Senior","Junior")

console.log(replace);

// exercise 01: (replace JavaScript and interpreting words at the same time)
let phrase = "JavaScript is an interpreting programming language.";

// method 2 (beginner friendly)

phrase.replace("JavaScript", "C#").replace("interpreting", "compiling");

// method 1 (advance shape)
const mapObj = {
  JavaScript: "C#",
  interpreting: "compiling",
};

phrase = phrase.replace(
  /\b(?:JavaScript|interpreting)\b/gi,
  (matched) => mapObj[matched]
);