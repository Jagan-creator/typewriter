const sentence = "hello there from lighthouse labs\n";

let outputSentence = function() {
  let i = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, 50 * i, char);
    i++;
  }
};

outputSentence();