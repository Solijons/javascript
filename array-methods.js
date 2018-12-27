
//Playing with arrays

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();//removes first item
//console.log(secretMessage.length);// gets the length should be 23 after removing one (see above)
secretMessage.push('to', 'Program');// <- pushing new arrays
secretMessage[7] = 'right'; // getting index of 'easily' and chaching to right
secretMessage.shift([0]); //removes first item from array
secretMessage.unshift('Programming'); // adds item at the beginning
secretMessage.splice(6,10, 'know'); // from start index of 6 which is 'get' to end index of 10 which is 'time' removes and adds the word 'know'
console.log(secretMessage.join()); // makes arrays in on line
// output after manipulating with arrays 
//Programming,is,not,about,what,you,know,can,figure,out.,-2015,,Chris,Pine,,Learn,to,Program




