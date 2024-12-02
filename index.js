function bmiCalculator(weight,height){

  var bmi = weight/(height*height);
  return bmi;
}

var bmi = bmiCalculator(60,1.8);
console.log(bmi);


