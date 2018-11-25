# _making-anagrams_

#### _string manipulation programming challenge, 11.24.2018_

#### By _**planeswalker1**_

## Description

_This repository has been created in order to showcase a programming challenge about string manipulation completed in JavaScript._

## challenge

Joe is taking a cryptography class and finding anagrams to be very useful. We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency For example, <em>bacdc</em> and <em>dcbac</em> are anagrams, but <em>bacdc</em> and <em>dcbad</em> are not.

Joe decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help him find this number?

Given two strings, <em>a</em> and <em>b</em>, that may or may not be of the same length, determine the minimum number of character deletions required to make <em>a</em> and <em>b</em> anagrams. Any characters can be deleted from either of the strings.

For example, if <em>a=cde</em> and <em>b=dcf</em>, we can delete <em>e</em> from string <em>a</em> and <em>f</em> from string <em>b</em> so that both remaining strings are <em>cd</em> and <em>dc</em> which are anagrams.

<strong>Function Description</strong>

make a function that returns an integer representing the minimum total characters that must be deleted to make the strings anagrams.

this function has the following parameter(s):

* a: a string
* b: a string

<strong>Input Format</strong>

The first line contains a single string, <em>a</em>.
The second line contains a single string, <em>b</em>.

<strong>Constraints</strong>

The strings <em>a</em> and <em>b</em> consist of lowercase English alphabetic letters ascii[a-z].

<strong>Output Format</strong>

Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.

<strong>Sample Input</strong>

```
cde
abc
```

<strong>Sample Output</strong>

```
4
```

<strong>Explanation</strong>

We delete the following characters from our two strings to turn them into anagrams of each other:

Remove <em>d</em> and <em>e</em> from <em>cde</em> to get <em>c</em>.
Remove <em>a</em> and <em>b</em> from <em>abc</em> to get <em>c</em>.
We must delete 4 characters to make both strings anagrams, so we print 4 on a new line.

## Setup/Installation Requirements

* _Clone repository_
* _Navigate to the cloned repository in terminal_
* _open web browser of choice and go to localhost:4000 to see website_

## Known Bugs

_I don't think there are any bugs_

## Support and contact details

_If you run into any issues or have questions, ideas or concerns contact me at daniel.munozdev@gmail.com_

## Technologies Used

_JavaScript_