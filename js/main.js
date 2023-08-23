//P.R.E.P

/**
 An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

**/

//P - A string will be given, must handle both upper and lower case

//R - Return to the console

//E - isIsogram "Dermatoglyphics" = true

//this is the answer online
function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j]) //it didn't have to be an array to compare the array index. funny right?
          return false;
    return true;
  }

console.log(isIsogram("hello"))

//below is what I tried and couldn't get 

// function isIsogram(str){
//     //convert all to lower case
//     lowerCase = str.toLowerCase()
//     //break apart into an array
//     splitItUp = lowerCase.split("")
//     //check for duplicates

 //   for (let i = 0; i < splitItUp.length; i++){ //this is running through the array the first time to check for all letters
//     for (let j = 0; j < splitItUp.length; j++){ //this is comparing one value of the array to the other
//         if (i !== j){ //to make sure that it is not comparing with itself
//             if (splitItUp[i] === splitItUp[j]){
//                 //there is a duplicate
//                 return false
//             } else if (splitItUp[i] !== splitItUp[j]){
//                 //there is no duplicate 
//                 return true
//             }
//         }
//     } 
// }


//   }
//   console.log(isIsogram("hello"))

