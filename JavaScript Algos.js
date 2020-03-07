// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is .
function isLeapYear(year){
    // return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
    //divible by 4 it is
    //divisble by 100 it isnt
    //divisible by 400 it is
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
    {
      return true
    }
    return false

}
// console.log(isLeapYear(2001))

// /*
// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.
// */
function printAndCount(i=512, max=1000, mult=5){
  // while(i < max){
  //   if(i % mult === 0){
  //     console.log(i)
  //   }
  //   i++;
  // }
  let sum=0
  for(i; i<max; i+=5)
  {
    console.log(i)
      sum++;
  }
  
console.log(sum);
}


// printAndCount()

/*
Multiples of Six
Print multiples of 6 up to 60,000, using a WHILE .
*/

function multiplesOfSix(min=0, max=600, inc=6){
  while(min < max){
      console.log(min)
      min += inc;
    }
    
}

// printAndCount(6, 600, 6)
// multiplesOfSix()

/*
Counting, the Dojo Way
Print integers 1 to 100. If divisible by 5, print "Coding" instead . If by 10, also print " Dojo" .
*/
function counting(min=1, max=100, mult=5){
  for(let i = min; i < max; i++){

    console.log(i % 10 === 0 ? 'Coding Dojo' : i % 5 === 0 ? ' Dojo' : i) 

    // if(i % 10 === 0){
    //   console.log("Coding");
    // } else if ( i % 5 === 0) {
    //   console.log("Coding Dojo");
    // } else {
    //   console.log(i)
    // }
  }
}

// counting()

/*
What Do You Know?
Your function will be given an input parameter incoming . Please console.log this value.
*/



/*
Whoa, That Sucker’s Huge…
Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
*/



// var person = prompt("Please enter your name");

// if (person != null) {
//   console.log("Hello " + person + "! How are you today?");
// }



// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order , log "How did you know?" , else log "Just another day...."

function birthday(month, day){
  const answer = prompt("Guess birthday (month/day)")
  const [ansMonth,ansDay] = answer.split('/').map(e => +e)
    if(ansMonth === month && ansDay === day){
        console.log("How did you know?");
    } else {
        console.log("Just another day...");
    }
}

// birthday(12,25)

// Balance Point

// Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,9,1] → true ( between indices 3&4 ), but [1,2,4,2,1] → false .

function hasBalancePoint(arr){
  // let sumA = 0
  // let sumB = 0
  // for(let i = 1; i < arr.length; i++) {
  //   let arrA = arr.slice(0, i)
  //   let arrB = arr.slice(i, arr.length)
  //   console.log(arrA, arrB)
  //   let sumA = arrA.reduce((a,b) => a + b)
  //   let sumB = arrB.reduce((a,b) => a + b)
  //   if (sumA === sumB) {
  //     return true
  //   }
  // }
  // return false
  
  let sumA=arr[0]; //first value in array
  let sumB=0; 
  for(let i=1; i<arr.length; i++)
  {
    sumB+=arr[i]
  }

  for(let i=1; i< arr.length-1; i++)
  {
    if(sumA === sumB)
    {
      return true
    }
    sumA+=arr[i] //add the next number to sumA
    sumB-=arr[i] //subtract the next number from sumB
  }
  return false;
}

hasBalancePoint([1,2,3,4,9,1])

function countdown(num){
    if(num == 0){
      return;
    }
    console.log(num)
    countdown(num-1)
}

/*
Based on earlier “Countdown by Fours”, given lowNum , highNum , mult , print multiples of mult from highNum down to lowNum , using a FOR . For (2,9,3) , print 963 (on successive lines).
*/
function flexCountdown(lowNum, highNum, mult)
{
  for(let i=highNum; i>lowNum; i-=mult)
  {
    console.log(i);
  }
}
//print 6,12,15 (which are all of the multiples of 3 between 5 and 17 , and excluding the value 9 ).
function finalCountdown(lowNum, highNum, mult, skip)
{
  var i=lowNum;
  while(i<highNum)
  {
    if(i !== skip && i % 3 === 0)
    {
      console.log(i);
    }
    i++;
  }
}
// finalCountdown(5,17,3,9)
// countdown(20)

// 2day i learned
// +  Unary operator, converts string num to type numbers
// Array.from() Converts Array-like structures type array
// chaining ternary operators to simulate else if


// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
function countdown(num)
{
  var arr = [];
  for(let i=num; i>=0; i--)
  {
    arr.push(i)
  }
  return arr
}

// console.log(countdown(10))
// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

function printAndReturn(arr)
{
  console.log(arr[0]);
  return arr[1]
}

// printAndReturn([1,2]);

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false ).
function firstPlusLength(arr)
{
  return arr[0] + arr.length
}

// firstPlusLength([1,2,3,4])
// firstPlusLength(["hi", 3, 5, 6])

// Values Greater than Second
// For [1,3,5,7,9,13] , print values that are greater than its 2nd value. Return how many values this is.

function greaterThanSecond(arr)
{
  var count = 0;
  for(let i = 0; i < arr.length; i++)
  {
    if(arr[i] > arr[1])
    {
      console.log(arr[i])
      count ++;
    }
  }
  return count;
}

//greaterThanSecond([1,3,5,7,9,13])

// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2 nd value. Print how many values this is. What will you do if the array is only one element long?

function gTS(arr)
{
  var newArr= [];
  for(let i=0; i<arr.length; i++)
  {
    if(arr[i]> arr[1])
    {
      newArr.push(arr[i])
    }
  }
  console.log(newArr.length)
  return newArr
}

//gTS([1,3,5,7,9,13])
// This Length, That Value
// Given two numbers, return array of length num1 with each value num2 . Print "Jinx!" if they are same.
function thisLengthThatValue(num1, num2)
{
var arr1= []
for(var i=0; i<num1; i++)
{
  arr1.push(num2)
  }
  if(num1 === num2)
  {
    console.log('Jinx!')
  }
  return arr1
}

//thisLengthThatValue(5,5)
// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!" ; if value at [0] is less than array’s length, print "Too small!" ; otherwise print "Just right!" .
function fTFV(arr)
{
  if(arr[0] > arr.length)
  {
    console.log('Too Big')
  }
  else if(arr[0] < arr.length)
  {
    console.log('Too Small')
  }
  else
  {
    console.log('Just Right')
  }
}

//fTFV([4,2,3,4])
// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32 .
//Divide by 5, then multiply by 9, then add 32
//(32°F − 32) × 5/9 = 0°C

function fahrenheitToCelsius(num)
{
  return (num-32)*5/9
}

//fahrenheitToCelsius(32)

function celciusToFahrenheit(num)
{
  return (num/5)*9+32
}

//celciusToFahrenheit(0)
//cool()
// Celsius to Fahrenhei
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

// (optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.
function cool()
{
  var match=false
  var i=0
  while(!match)
  {
    console.log(i)
    if(fahrenheitToCelsius(i) === celciusToFahrenheit(i))
    {
      match == true
      console.log('They match at' + i);
    }
    i++;
  }
}

// Biggie Size
// Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5] .

function makeItBig(arr)
{
  for(var i=0; i< arr.length; i++)
  {
    if(arr[i]>0)
    {
      arr[i]='big'
    }
  }
  return arr
}
makeItBig([-1,3,5,-5])

// Print Low, Return High
// Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.
function lowHigh(arr)
{
  var lowNum=arr[0]
  var highNum=arr[0]
  for(var i=1; i<arr.length; i++)
  {
    if(arr[i]<lowNum)
    {
      lowNum=arr[i]
    }
    if(arr[i]>highNum)
    {
      highNum=arr[i]
    }
  }
  console.log('Low num is ' + lowNum)
  return(highNum)
}
//lowHigh([1,2,3,4,5])

// Print One, Return Another
// Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.
function printReturn(arr)
{
  console.log(arr[arr.length-2])
  for(i in arr)
  {
    if(i % 2 == 1)
    {
      return i
    }
  }
}
//printReturn([1,2,3,4,5])

// Double Vision
// Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

function double(arr)
{
  for(i in arr)
  {
    arr[i]=arr[i]*2
  }
  return arr
}
// double([2,4,6])

// Count Positives
// Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function countPositives(arr){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      count ++;
    }
  }
  arr[arr.length - 1] = count;
  return arr;
}

// countPositives([-1,1,1,1])

// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function evensAndOdds(arr){
  //create two variables, one for evenCount, one for oddCount
  //iterate over the array, for loop
  //if we find an even number, add to evenCount
  //if we find an odd number, add to oddCount
  let evenCount=0
  let oddCount=0
  for(i in arr)
  {
    if(arr[i] % 2 ==0)
    {
      oddCount=0
      evenCount++
      if(evenCount===3)
      {
        console.log('Even more so')
        evenCount=0
      }
    }
    else
    {
      evenCount=0
      oddCount++
      if(oddCount===3)
      {
        console.log('Thats Odd')
        oddCount=0
      }
    }
  }

}
//evensAndOdds([1,2,1,1,1,2,2,2,1,1,1,1,1,1])


// var age = 26;
// var beverage = (age >= 21) ? "Beer" : "Juice";
// console.log(beverage); // "Beer"

// Increment the Seconds
// Given arr , add 1 to odd elements ( [1] , [3] , etc.), console.log all values and return arr .
function incrementSeconds(array1)
{
  const incrementSeconds = array1.map(x => (x%2==1) ? x + 1 : x);
  console.log(incrementSeconds)
}
// incrementSeconds([1,2,3,4,5])
// Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.
//['I', 'Like', 'Pizza']
//['I', 1, 4]
function previousSeconds(arr)
{
  for(var i=arr.length-1; i>0; i--)
  {
    arr[i]=arr[i-1].length
  }
  return arr
}
// previousSeconds(['I', 'Like', 'Pizza'])

// Add Seven to Most
// Build function that accepts array. Return a new array with all values except to the first , adding 7 to each. Do not alter the original array.
function sevenToMost(arr)
{
  var map= arr.map(x => x+7)
  map[0]-=7
  return map
  
}
//sevenToMost([1,1,1,1])

// Reverse Array
// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3] .
function reverse(arr)
{
  var temp;
  var end=arr.length-1
  for(var i=0; i<arr.length/2; i++)
  {
    
    temp=arr[i];
    arr[i]=arr[end-i];
    arr[end-i]=temp;
  }
  return arr
}
//reverse([3,1,6,4,2])

// Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, made negative ( not simply multiplied by -1 ). Given [1,-3,5] , return [-1,-3,-5].
// function pos_to_neg(num)
// {
// return -Math.abs(num);
// }
function negative(arr)
{
  const newArr =arr.map(x => -Math.abs(x))
  return newArr
}
// negative([1,-3,5])

// Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food" . If no array elements are "food" , then print "I'm hungry" once. ["food", "car", "dog", 3]
function alwaysHungry(arr){
  count = 0;
  for(i in arr){
    if(arr[i] === "food"){
      console.log("yummy");
      count ++;
    }
  }
  if(count === 0){
    console.log("I'm hungry");
  }
}

// alwaysHungry(["car", "dog", 3])

// Swap Toward the Center
// Given array, swap first and last, third and third-to-last, etc. Input [ true ,42,"Ada",2, "pizza" ] becomes [ "pizza" ,42,"Ada",2, true ] . Change [1,2,3,4,5,6] to [6 ,2, 4 , 3 ,5, 1].
function swap(arr)
{
  var temp;
  var end=arr.length-1;
  for(var i=0; i<arr.length/2; i+=2)
  {
    
    temp=arr[i];
    arr[i]=arr[end-i];
    arr[end-i]=temp;
  }
  return arr
}

swap([ true ,42,"Ada",2, "pizza" ])
// swap([1,2,3,4,5,6])

// Scale the Array
// Given array arr and number num , multiply each arr value by num , and return the changed arr .
function scaleArr(arr, num){
  return arr.map(x => x * num)
}

//scaleArr([1,2,3,4], 2)

//How do you swap two number variables without a temp
// int a=10, b=20;      
// printf("Before swap a=%d b=%d",a,b);      
// a=a+b;//a=30 (10+20)    
// b=a-b;//b=10 (30-20)    
// a=a-b;//a=20 (30-10)    
// printf("\nAfter swap a=%d b=%d",a,b);    
// return 0;  

// Only Keep the Last Few
// Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. Given array arr and number X , remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3) , change the given array to [6,8,10] and return it.

function shorten(arr, num)
{
  // newArr= []
  // for(var i=num; i<arr.length; i++)
  // {
  //   newArr.push(arr[i])
  // }
  // return newArr
  return arr.slice(num)
}

shorten([1,2,3,4,5],3)


// Math Help
// Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction).
function mathHelp(m,b)
{
  return(`X= ${b/m}`)
}

// Poor Kenny
// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.

//volcanoes 1/10
//tsunami 15/100
//earthquakes 1/5
//blizards 1/4
//meteors 3/10
function kennyDies()
{
 var today= [];
 var volcano=Math.floor(Math.random() * 10) //a number between 0-9 10% chance to get a 1
 if(volcano ===1)
 {
   today.push('Volcano')
 }
 
 var tsunami=Math.floor(Math.random() * 100) //15% chance 1-100 if we get any number from 1-15 that 
 if(tsunami < 15)
 {
   today.push('Tsunami')
 }

 var earthquake=Math.floor(Math.random() * 5)
 if(earthquake===1)
 {
   today.push('EarthQuake')
 }

 var blizzards=Math.floor(Math.random() * 4)
 if(blizzards===1)
 {
   today.push('Blizzard')
 }

 var meteors=Math.floor(Math.random() * 10)
 if(meteors < 3)
 {
   today.push('Meteors')
 }
  if(!today.length)
  {
    return 'Kenny Lives'
  }
  return today
}
kennyDies()

// What Really Happened?
// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday() . In this new function test for each disaster independently , instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none . Maybe Kenny will survive!

function kennyDies()
{
 var today= [];
 var volcano=Math.floor(Math.random() * 10) //a number between 0-9 10% chance to get a 1
 if(volcano ===1)
 {
   today.push('Volcano')
 }
 
 var tsunami=Math.floor(Math.random() * 100) //15% chance 1-100 if we get any number from 1-15 that 
 if(tsunami < 15)
 {
   today.push('Tsunami')
 }

 var earthquake=Math.floor(Math.random() * 5)
 if(earthquake===1)
 {
   today.push('EarthQuake')
 }

 var blizzards=Math.floor(Math.random() * 4)
 if(blizzards===1)
 {
   today.push('Blizzard')
 }

 var meteors=Math.floor(Math.random() * 10)
 if(meteors < 3)
 {
   today.push('Meteors')
 }
  if(!today.length)
  {
    return 'Kenny Lives'
  }
  return today
}
// Soaring IQ
// Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, Bogdan, entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. all the way until increasing by .98 on his 98 th day (the end of 14 full weeks). What is Bogdan’s final IQ?

function soaringIQ(iq)
{
    for(var i=.01; i<.98; i+=.01)
    {
        iq+=i
    }
    return iq
}
// soaringIQ(101);

// Letter Grade
// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88 , you should log "Score: 88. Grade: B" . Given the score 61 , log the string "Score:
// 61. Grade: D" .
// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log('Sorry, we are out of ' + expr + '.');
// }

function letterGrade(score){
  switch(true){
    case score>=90:
      console.log(`Score: ${score}. Grade: A`)
      break;
    case score>=80:
      console.log(`Score: ${score}. Grade: B`)
      break;
    case score>=70:
      console.log(`Score: ${score}. Grade: C`)
      break;
    case score>=60:
      console.log(`Score: ${score}. Grade: D`)
      break;
    default:
      console.log(`Score: ${score}. Grade: F...Fail.`)
  }
}
// letterGrade(55)
// letterGrade(90)
// letterGrade(72)
// More Accurate Grades
// For an additional challenge, add ‘ - ’ signs to scores in the bottom two percent of A, B, C and D scores, and “ + ” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88 , console.log "Score: 88. Grade: B+" . Given 61 , log "Score: 61. Grade: D-" .
function letterGradeAdvanced(score){
  switch(true){
    case score>=90:
      console.log(`Score: ${score}. Grade: A`)
      break;
    case score>=88:
        console.log(`Score: ${score}. Grade: B+`)
      break;
    case score>=83:
      console.log(`Score: ${score}. Grade: B`)
      break;
    case score>=80:
      console.log(`Score: ${score}. Grade: B-`)
      break;
    case score>=78:
        console.log(`Score: ${score}. Grade: C+`)
      break;
    case score>=73:
      console.log(`Score: ${score}. Grade: C`)
      break;
    case score>=70:
      console.log(`Score: ${score}. Grade: C-`)
      break;
    case score>=68:
        console.log(`Score: ${score}. Grade: D+`)
      break;
    case score>=63:
      console.log(`Score: ${score}. Grade: D`)
      break;
    case score>=60:
      console.log(`Score: ${score}. Grade: D-`)
      break;
    default:
      console.log(`Score: ${score}. Grade: F...Fail.`)
  }
}
letterGradeAdvanced(88)
letterGradeAdvanced(72)
letterGradeAdvanced(65)

