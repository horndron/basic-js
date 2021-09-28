import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n = n.toString().split('');

  let minIndex = 0;

  n.forEach(function(item, i, n){
    if(n[minIndex] > item) {
      minIndex = i;
    }
  });
  delete n[minIndex];
  n = +(n.join(''))
  
  return n;

}
