//BMI calculator
function bmiCalculator(weight,height){

  var bmi = weight/(height*height);
  return bmi;
}

var bmi = bmiCalculator(60,1.8);
console.log(bmi);

//calculator
function add(num1,num2){
  return num1 + num2;
}

function multiply(num1,num2){
 return num1 * num2;
}

function calulator(num1,num2,operator){
 return operator(num1,num2);
}

calculator(2,3,add); //5
calculator(2,3,multiply);　//6 

//Image switcher 
let image = document.querySelector('img');

image.onclick = function() {

  let mySrc = image.getAttribute('src');
  if(mySrc === 'images/image.jpg'){
    image.setAtrribute('src','images/image2.jpg');
  }else {
    image.setAttribute('src','images/image.jpg');
  }
}
    
//Greeting 
let heading = document.querySelector('h1');

function setUserName(){
  let nickName = prompt('Please enter your nickname.');
  if(!nickName){
    setUserName();
  } else {
    localStorage.setItem('name',nickName);
    heading.innerHTML = 'You are Star, ' + nickName;
  }
}

if(!localStorage.getItem('name')){
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  heading.innerHTML = 'You are Star, ' + storedName;
}

heading.onClick = function(){
  setUserName();
}
  
    
  
  
