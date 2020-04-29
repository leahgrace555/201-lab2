'use strict';

alert('Please answer the following questions with either "yes" or "no"')

//To try to get the user to answer with acceptable values

var numCorrect = 0;

console.log(numCorrect);

var favColor = prompt('Is Leah\'s favorite color purple?'); // asking the first qeustion


//console.log(favColor); //logging the user's answer to question 1


if(favColor.toLowerCase()=== 'yes'){
  alert('Correct! Purple is an awesome color'); //letting the user know they are correct if they answer yes
  numCorrect = numCorrect + 1;
  console.log(numCorrect);
} else if(favColor.toLowerCase() === 'no'){
  alert('That is incorrect. Purple is a great color.'); //letting the user know they are incorrect if they answer no
} else{
    alert('Following instructions isn\'t really your thing, huh?'); //letting the user know they didn't put in a proper answer
}
//now we're gonna ask another question


var pets = prompt('Do you think leah has many cats as pets?');

//console.log(pets);

if(pets.toLowerCase() ==='yes'){
  alert('Incorrect. Rabbits are the superior form of furry companion'); //letting the user know they are wrong
} else if(pets.toLowerCase() === 'no'){
  alert('That\'s Correct! Everyone knows rabbits are the superior furry companions.'); //alerting the user they are correct if they answer no
  numCorrect = numCorrect + 1;
}

/* I was trying to see if i could get it to say a different answer ONLy if you didn't put yes or no for BOTH the first and second questions but I needed to stop wasting time and actually complete the assignment. 

I'm only leaving it in because I really do want to try to make this work

else if(pets.toLowerCase() !== 'yes' || pets.toLowerCase() !== 'no' && favColor.toLowerCase() !=='yes' || favColor.toLowerCase() !== 'no'){
  alert('Back at it again with that "I don\'t follow instructions" attitude.');
}

*/

else{
  alert('Following instructions isn\'t really your thing, huh?');

}

//question 3

var coffee = prompt('Can Leah function in the morning without her coffee?');

//console.log('the user answered ' + coffee + ' for question 3');

if(coffee.toLowerCase() ==='yes'){
  alert('Correct. Coffee makes leah jittery and unable to focus on work.');
  numCorrect = numCorrect +1;
} else if(coffee.toLowerCase() === 'no'){
  alert('Incorrect. Caffeine addiction is no joke. Leah prefers a cup of herbal tea in the morning.');
} else{
  alert('Following instructions isn\'t really your thing, huh?');
}

//question 4

var icecream = prompt('Is Leah\'s favorite flavor of ice cream vanilla?');

//console.log('the user ansered ' + icecream + ' for question 4')

if(icecream.toLowerCase() === 'yes'){
  alert('Incorrect! that is so boring! Ironically, her favorite flavor is coffee.');
} else if(icecream.toLowerCase() === 'no'){
  alert('Correct! Ironically, her favorite flavor of ice cream is coffee.');
  numCorrect = numCorrect + 1;
} else{
  alert('Following instructions isn\'t really your thing, huh?');
}

//question 5

var knitting = prompt('Does Leah know how to knit or crochet?');

if(knitting.toLowerCase() === 'yes'){
  alert('That\'s right! Leah loves doing both in her free time and sells her crafts on Etsy. ');
  numCorrect = numCorrect + 1;
} else if(knitting.toLowerCase() ==='no'){
  alert('Wow. That is incorrect, and Leah would be so upset if she heard you say that. Yarn is life.');
} else{
  alert('Following directions is not your thing, huh?');
}


// question 6, number guessing game with only 4 tries to get it right

for(var i = 0; i < 4; i++){
  var guessNum = prompt('Guess a number between 0 and 1000!!');
  guessNum = parseInt(guessNum);
  if(guessNum === 42 ){
 var correct = alert('That\'s right! Look at you go!');
 numCorrect = numCorrect + 1;
  break;
} else if(guessNum < 42){
  alert('Whoops! Too low');

} else if(guessNum > 42){
  alert('Aiming a bit high there, bud. Try setting the bar lower next time.');
} else{
  alert('Yikes! Numerical values only, please.');
}


}

alert('The correct answer is always 42');

var poss = ['italy','spain','france','austria','US'];
var correct = false;

for(var n = 0; n<7; n++){

  var guessPoss = prompt('Try to guess a country Leah has visited')
  for( var l = 0; l < guessPoss.length; l++){
    if(guessPoss === poss[l]){
      alert('Right!');
      correct = true;
      numCorrect = numCorrect+1;
      break;
    }
  } 
  if(correct){
    break;
  } else{
    alert('Oh no! try again');
  }
  
} 

alert('congrats! you got ' + numCorrect + ' out of 7 correct.');









