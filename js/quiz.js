'use strict';

alert('Please answer the following questions with either "yes" or "no"')

//To try to get the user to answer with acceptable values


var favColor = prompt('Is Leah\'s favorite color purple?'); // asking the first qeustion


//console.log(favColor); //logging the user's answer to question 1


if(favColor.toLowerCase()=== 'yes'){
  alert('Correct! Purple is an awesome color'); //letting the user know they are correct if they answer yes
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
} else{
  alert('Following instructions isn\'t really your thing, huh?');
}

//question 5

var knitting = prompt('Does Leah know how to knit or crochet?');

if(knitting.toLowerCase() === 'yes'){
  alert('That\'s right! Leah loves doing both in her free time and sells her crafts on Etsy. ');
} else if(knitting.toLowerCase() ==='no'){
  alert('Wow. That is incorrect, and Leah would be so upset if she heard you say that. Yarn is life.');
} else{
  alert('Following directions is not your thing, huh?');
}





