// what do i want to do:

// check if 2 string is an anagram
// what is an anagram
// turn strings into arrays
// check both strings for equality
// if strings char are equal add 1 to a counter var
// subtract counter var from string 1 to get amount of cuts to string 1
// subtract counter var from string 2 to get amount of cuts to string 2
// add both new values together and return it for the amount of cuts needed for the anagrams

// problems so far:

// check for duplicate matches


function isAnagram (a, b) {
	//turn each string into arrays to check for equality
	let stringAArray = a.split('');
  let stringBArray = b.split('');

  // have a counter variable to count how many letters match
  let numberOfMatches = 0;

  //check which string is bigger to loop through that string in the first loop
  //so we dont have duplicate equality checks
  if (stringAArray.length > stringBArray.length) {
  	stringAArray = b.split('');
    stringBArray = a.split('');
  }

  //loop through both array of strings to check if stringAArray[i] === stringBArray[j]
  for (let i = 0; i < stringAArray.length; i++) {
    for (let j = 0; j < stringBArray.length; j++) {
      if (stringAArray[i] === stringBArray[j]) {
      	// console.log('match');
        numberOfMatches++;
        break;
      }
    }
  }
  console.log('number of matches: ' + numberOfMatches);
  // I subtracted numberOfMatches from the length of stringAArray to get how many cuts to make to the string.
  let stringACuts = stringAArray.length - numberOfMatches;

  console.log('string a array: ' + stringAArray);
  console.log('string a array length: ' + stringAArray.length);
  console.log('string a cuts: ' + stringACuts);
  // I subtracted numberOfMatches from the length of stringBArray to get how many cuts to make to the string.
  let stringBCuts = stringBArray.length - numberOfMatches;
  console.log('string b array: ' + stringBArray);
  console.log('string b array length: ' + stringBArray.length);
  console.log('string b cuts: ' + stringBCuts);
  return;
  // console.log(stringACuts + stringBCuts);
  // return total amount of cuts
  return stringACuts + stringBCuts;
}

isAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke');