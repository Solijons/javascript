
//Playing with arrays

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//removes the last element of arr
secretMessage.pop();
// checking the length
//console.log(secretMessage.length);
//console.log(secretMessage);
// pushing new elements 
secretMessage.push('to', 'Program');
//console.log(secretMessage);
// changing the value
secretMessage[7] = 'right';
//console.log(secretMessage);

// removes the first str of arr
secretMessage.shift();
// adds the new arr at beggining
secretMessage.unshift('Programming');
// removes indexed arrays 
secretMessage.splice(6, 5, 'know');
// prints as sentence 

console.log(secretMessage.join(' '));


