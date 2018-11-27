// what do I want to do:

// check if 2 string is an anagram
// what is an anagram
// turn strings into arrays
// check both strings for equality
// if strings char are equal add 2 to a counter var
// subtract counter var from string 1 to get amount of cuts to string 1
// subtract counter var from string 2 to get amount of cuts to string 2
// add both new values together and return it for the amount of cuts needed for the anagrams

function isAnagram (a, b) {
	// turn each string into arrays to check for equality
	let stringAArray = a.split('');
  let stringBArray = b.split('');

  // have a counter variable to keep track of how many characters match
  let numberOfMatches = 0;

  // check which string is smaller to loop through that string in the first loop
  // so we can reduce the number of equality checks
  if (stringAArray.length > stringBArray.length) {
  	stringAArray = b.split('');
    stringBArray = a.split('');
  }

  // loop through both array of strings to check if stringAArray[i] === stringBArray[j]
  // push 2 counters to numberOfMatches for each match
  // set stringBArray[j] to null so that when we do an equality check it would not check that same value again and add counters to numberOfMatches
  for (let i = 0; i < stringAArray.length; i++) {
    for (let j = 0; j < stringBArray.length; j++) {
      if (stringAArray[i] === stringBArray[j]) {
      	// console.log('match');
        numberOfMatches += 2;
        stringBArray[j] = null;
        break;
      }
    }
  }

  // console.log('number of matches: ' + numberOfMatches);
  // console.log('string a array: ' + stringAArray);
  // console.log('string b array: ' + stringBArray);
  // console.log('number of cuts: ' + (stringAArray.length + stringBArray.length) - numberOfMatches);

  // return total amount of cuts to both strings
  return (stringAArray.length + stringBArray.length) - numberOfMatches;
}
