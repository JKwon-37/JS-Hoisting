// // Problem #1
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';

// // Problem #2
// var needle;
// function test(){
//       var needle;
//       needle = 'magnet';
//       console.log(needle);
//   }
// needle = 'haystack'
// test();
// function test(){
//       var needle = 'magnet';
//       console.log(needle);
//   }

// // Problem #3
// var brendan;
// brendan ='super cool';
// function print(){ // hoisted function
//       brendan = 'only okay';
//       console.log(brendan); // logs 'only okay'
//   }
// function print(){
//       brendan = 'only okay';
//       console.log(brendan); // logs 'only okay'
//   }
// console.log(brendan); //logs 'super cool'

// // Problem #4
// var food;
// function eat(){
//   var food
//   food = 'half-chicken';
//   console.log(food); // logs 'half-chicken'
//   food = 'gone'; 
// }
// food = 'chicken';
// console.log(food); // logs'chicken'
// eat();
// function eat(){
//   food = 'half-chicken';
//   console.log(food);
//   var food = 'gone';
// }

// // Problem #5
// var mean;
// mean(); // mean is not a function
// console.log(food);  // food is not declared a global variable
// mean = function() { // so it cannot be called outside of the function
//   var food;
//   food = 'chicken';
//   console.log(food); 
//   food = 'fish';
//   console.log(food);
// }
// console.log(food);

// // Problem #6
// var genre;
// function rewind() {
//   var genre;
//   genre = "rock";
//   console.log(genre); // logs 'rock'
//   genre = "r&b";
//   console.log(genre); // logs 'r&b'
// }
// console.log(genre); // logs 'undefined'
// genre = 'disco';
// rewind();
// function rewind() {
//   genre = "rock";
//   console.log(genre);
//   var genre = "r&b";
//   console.log(genre);
// }
// console.log(genre); // logs 'disco'

// // Problem 7
// var dojo;  //js engine automatically created var for undeclared variables
// function learn() {
//   var dojo;
//   dojo = "seattle";
//   console.log(dojo); // logs 'seattle'
//   dojo = "burbank";
//   console.log(dojo); // logs 'burbank'
// }
// dojo = 'san jose';
// console.log(dojo); // logs 'san jose' 
// learn();
// function learn() {
//   dojo = "seattle";
//   console.log(dojo);
//   var dojo = "burbank";
//   console.log(dojo);
// }
// console.log(dojo); // logs'san jose'

//Problem Bonus
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
