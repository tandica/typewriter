const sentence = "hello there from lighthouse labs";

 for (let char = 0; char < sentence.length; char++) {
    setTimeout(() => { process.stdout.write(sentence[char]) }, char * 100);
    setTimeout(() => console.log("\n"), 4000);
}
