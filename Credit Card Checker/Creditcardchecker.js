let inputFromWeb = document.getElementById('cardNum');
let textBoxOutput = document.getElementById('output');
let submitButton = document.getElementById('submit');
//Gets user input from console.
//turns string of numbers into array of numbers
 
let finArray = [];
let stringToArray = () => {  
  let user =  inputFromWeb.value;
  let userArray = user.split('');
  finArray = userArray.map(str => {
  return Number(str)});
  //console.log(finArray);
  }

const sepNumAray = num =>{
 const numToSeparate = num;

const arrayOfDigits = Array.from(String(numToSeparate), Number);

return arrayOfDigits;
}

let toMultiply= [];
let multiplied = [];
let finalMul = [];
let toAdd = [];
let getDigit = 0;
let sum=0;
let checkDigit = 0;

const validateCred = array =>{
  console.log("the starter array: ", array)
//Elements to Multiply by 2
  for(let i = array.length -2; i >= 0; i-=2){
    let temp = array[i];
    toMultiply.push(temp);
    }
    console.log("elements to mulitiply: ", toMultiply)
    //Mulitply the Elements
    for(let j = 0; j < toMultiply.length;j++){
      var tempp = toMultiply[j];
      var product = tempp *2;
      multiplied.push(product);
      }
     console.log("Mulitiplied: ", multiplied)
      //If elements greater then 9 minus them
    for(let k = 0; k < multiplied.length; k++){
      var temp = multiplied[k];
      if(temp > 9){
        let temppp = temp - 9;
        finalMul.push(temppp);
      }else {
        finalMul.push(temp);
      }
    }
    console.log("Final Mulitiplied array ",finalMul);
// 
//Other Elements

  for(let j = array.length-1;j >= 0;j-=2){
    let temp2 = array[j];
    toAdd.push(temp2);
  }
console.log("The elements to add: " ,toAdd );
let sumArray = finalMul.concat(toAdd);
console.log("the total Array: ",sumArray);
//The Final Sum!
for(let i = 0; i < sumArray.length;i++){
   sum =  sum+=sumArray[i];
  }
console.log("the sum total: ", sum);
//The ANSWER!!!
checkDigit = sum%10;
getDigit = (10-(sum%10))%10;
console.log("the answer: ",checkDigit);
if(checkDigit === 0){
   return true;
}else{
  return false;
}
 }

//console.log(validateCred(finArray));

const idCardCompanies = card =>{
  let companies = [];
  for(let i = 0; i< card.length; i++){
    switch(card[i][0]){
      case 2: 
      if(companies.indexOf('MasterCard') === -1){
        companies.push('Mastercard')
      }
      case 3:
        if(companies.indexOf('Amex') === -1){
       companies.push('Amex');
    }
        break
        case 4:
        if(companies.indexOf('Visa') === -1){
        companies.push('Visa');
    }
        break
      case 5:
      if(companies.indexOf('Mastercard') === -1){
        companies.push('Mastercard');
      }
         break
      case 6:
      if(companies.indexOf('Discover') === -1){
        companies.push('Discover');
    }
         break
      default:
        return false;
    }
  }
  return companies[0];
}


let getCheckDigit = (array) =>{
    toMultiply = [];
    multiplied = [];
    finalMul = [];
    toAdd = [];
    sum = 0;
    console.log("the starter array: ", array)
//Elements to Multiply by 2
  for(let i = array.length -1; i >= 0; i-=2){
    let temp = array[i];
    toMultiply.push(temp);
    }
    console.log("elements to mulitiply: ", toMultiply)
    //Mulitply the Elements
    for(let j = 0; j < toMultiply.length;j++){
      var tempp = toMultiply[j];
      var product = tempp *2;
      multiplied.push(product);
      }
     console.log("Mulitiplied: ", multiplied)
      //If elements greater then 9 minus them
    for(let k = 0; k < multiplied.length; k++){
      var temp = multiplied[k];
      if(temp > 9){
        let temppp = temp - 9;
        finalMul.push(temppp);
      }else {
        finalMul.push(temp);
      }
    }
    console.log("Final Mulitiplied array ",finalMul);
// 
//Other Elements

  for(let j = array.length-2;j >= 0;j-=2){
    let temp2 = array[j];
    toAdd.push(temp2);
  }
console.log("The elements to add: " ,toAdd );
let sumArray = finalMul.concat(toAdd);
console.log("the total Array: ",sumArray);
//The Final Sum!
for(let i = 0; i < sumArray.length;i++){
   sum =  sum+=sumArray[i];
  }
console.log("the sum total: ", sum);
//The ANSWER!!!
getDigit = (10-(sum%10))%10;
return getDigit;
}


  

const showResults= (array) =>{
  let arrToString = array.join('');

if(validateCred(array)){
  textBoxOutput.innerText = `Check Digit: ${getDigit} \n Your credit card ${arrToString} is from ${idCardCompanies([array])} and is a valid Card!`
}
else{
  textBoxOutput.innerText = `Check Digit: ${getCheckDigit(array)} \n Your credit card ${arrToString} is from ${idCardCompanies([array])} and is a invalid Card!`
}
}

const outputText = () => {
  showResults(finArray);
  toMultiply = [];
  multiplied = [];
  finalMul = [];
  toAdd = [];
  sum = 0;
  
}

