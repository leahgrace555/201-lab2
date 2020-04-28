'use strict';

alert('Please answer the following questions with either "yes" or "no"')

//To try to get the user to answer with acceptable values

var favColor = prompt('Is Leah\'s favorite color purple?');

console.log(favColor);


if(favColor.toLowerCase()=== 'yes'){
  alert('Correct!');
} else if(favColor.toLowerCase() === 'no'){
  alert('That is incorrect. Purple is a great color.');
} else('Following instructions isn\'t really your thing, huh?');

