/* 

"String repeat"

Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/


function repeatStr (n, s) {
var result = s.repeat(n);
  return result;
}