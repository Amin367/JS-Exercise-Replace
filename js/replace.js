// exercise 00: (replace developer and developer words at the same time)
let sentence = "I am web developer and I am senior";

// method 1 (advance shape)

const mapObj = {
  developer: "student",
  senior: "junior",
};

phrase = phrase.replace(
  /\b(?:developer|senior)\b/gi,
  (matched) => mapObj[matched]
);

// method 2 (beginner friendly)

sentence.replace("developer", "student").replace("senior", "junior");

// exercise 01: (replace JavaScript and interpreting words at the same time)
let phrase = "JavaScript is an interpreting programming language.";

// method 1 (advance shape)

const mapObj = {
  JavaScript: "C#",
  interpreting: "compiling",
};

phrase = phrase.replace(
  /\b(?:JavaScript|interpreting)\b/gi,
  (matched) => mapObj[matched]
);

// method 2 (beginner friendly)

phrase.replace("JavaScript", "C#").replace("interpreting", "compiling");