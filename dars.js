1-masala
function rearrange(arr) {
  let sorted = [...arr].sort((a, b) => a - b);
  let result = [];

  let left = 0;
  let right = sorted.length - 1;

  while (left <= right) {
    if (left !== right) result.push(sorted[right--]);
    result.push(sorted[left++]);
  }
  return result;
}
let arr = [3, 1, 4, 1, 5, 9, 2];
console.log(rearrange(arr)); 

//2-masala
let str ="apple banana apple orange banana orange grape, cherry";
findUniqeWords(str); // ['grape, 'cherry']
function findUniqeWords(str){
    let words = str.split(" ");
    let wordCount = {};
    for(let word of words){
        if(wordCount[word]){
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    let uniqueWords = [];
    for(let word in wordCount){
        if(wordCount[word] === 1){
            uniqueWords.push(word);
        }
    }
    console.log("Unique so'zlar:", uniqueWords);
}   


//3-masala 
function uzunsoz(str){
    let words = str;
    let longestWord = "";
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    console.log("Uzun soz:", longestWord);
}
let str =["apple",  "banana", "grapefruit"];
uzunsoz(str);


//4-masala
function multiString(str, n) {
  return str.repeat(n);
}
console.log(multiString("salom", 3));

//5-masala
let arr1=[1, 2, 3, 4, 5];
let arr2=[4, 5, 6, 7, 8];
findCommonElements(arr1, arr2);
function findCommonElements(arr1, arr2){
    let commonElements = [];        
    for(let elem of arr1){
        if(arr2.includes(elem) && !commonElements.includes(elem)){
            commonElements.push(elem);
        }
    }
    console.log("Common elementlar:", commonElements);
}
