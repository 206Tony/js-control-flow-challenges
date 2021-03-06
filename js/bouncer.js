// The Bouncer
//Use a for...of loop to iterate over the array of objects below.
//For each attendee in the array, if their age is 21 or higher, 
//push them into an array called adults, otherwise push them into
//an array called minors. Print out both arrays when finished.

var attendees = [
  {name: 'Xev', age: 35},
  {name: 'Mal', age: 29},
  {name: 'Clos', age: 17},
  {name: 'Gysh', age: 39},
  {name: 'Zek', age: 10},
  {name: 'Hops', age: 14},
  {name: 'Sil', age: 21}
];

var adult = [];
var minor = [];
for (var i  of attendees) {
    var ofAge = i.age;
    if (ofAge > 20) {
        adult.push(i);
    }
    if (ofAge < 21) {  //could just be an else w/ } else { minor.push(i)}
        minor.push(i); 
    }      
}

