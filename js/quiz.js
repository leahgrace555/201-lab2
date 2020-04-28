'use strict';

alert('Please answer the following questions with either "yes" or "no"')

//To try to get the user to answer with acceptable values


var favColor = prompt('Is Leah\'s favorite color purple?'); // asking the first qeustion


console.log(favColor); //logging the user's answer to question 1


if(favColor.toLowerCase()=== 'yes'){
  alert('Correct! Purple is an awesome color'); //letting the user know they are correct if they answer yes
} else if(favColor.toLowerCase() === 'no'){
  alert('That is incorrect. Purple is a great color.'); //letting the user know they are incorrect if they answer no
}

 else{
    alert('Following instructions isn\'t really your thing, huh?'); //letting the user know they didn't put in a proper answer
} 
//now we're gonna ask another question


var pets = prompt('Do you think leah has many cats as pets?')

console.log(pets)

if(pets.toLowerCase() ==='yes'){
  alert('Incorrect. Rabbits are the superior form of furry companion'); //letting the user know they are wrong
} else if(pets.toLowerCase() === 'no'){
  alert('That\'s Correct! Everyone knows rabbits are the superior furry companions.'); //alerting the user they are correct if they answer no
} 
/* I was trying to see if i could get it to say a different answer ONLy if you didn't put yes or no for BOTH the first and second questions but I needed to stop wasting time and actually complete the assignment. 

else if(pets.toLowerCase() !== 'yes' || pets.toLowerCase() !== 'no' && favColor.toLowerCase() !=='yes' || favColor.toLowerCase() !== 'no'){
  alert('Back at it again with that "I don\'t follow instructions" attitude.');
}

*/
else{
    alert('Following instructions isn\'t really your thing, huh?');

}
 //question 3
var coffee = prompt('Can Leah function in the morning without her Coffee?')

console.log('for question three, the user answered ' + coffee)

if(coffee.toLowerCase() ==='yes'){
  alert('Correct. Coffee makes leah jittery and actually distracts her from working.'); //letting the user know they are right
} else if(coffee.toLowerCase() === 'no'){
  alert('That\'s incorrect! Caffeine addiction is no joke. Leah prefers a nice warm cup of herbal tea in the morning.'); //alerting the user they are wrong
} 

//Question 4 