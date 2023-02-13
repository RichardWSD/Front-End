const { lcs } = PacktDataStructuresAlgorithms;
const { lcsPrint } = PacktDataStructuresAlgorithms;

const wordX = "acbaed";
const wordY = "abcadf";
// const wordX = "bl";
// const wordY = "yby";

console.log("lcs", lcs(wordX, wordY));
console.log("lcsPrint", lcsPrint(wordX, wordY));
