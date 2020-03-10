const sentence = "hello there from lighthouse labs";
let count = 0;
for (const char of sentence) {
  if (count === sentence.length - 1) {
    setTimeout(() => {
      console.log('');
    }, (count + 1) * 50);
  }
  setTimeout(() => {
    process.stdout.write(char);
  }, count * 50); // <= 1s delay to make it noticeable. Can dial it down later.
  count++;
};
