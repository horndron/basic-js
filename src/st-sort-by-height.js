import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let minindex,
      minvalue,
      tmpValue;

    for (let i = 0; i < arr.length - 1; i++) {
      if(arr[i] == -1) continue;
      minindex = i;
      for (let j = i; j < arr.length; j++) {
        if(arr[minindex] == -1 || arr[minindex] > arr[j] && arr[j] != -1) {
          minindex = j;
        }
      }
      if(i != minindex) {
        minvalue = arr[minindex];
        tmpValue = arr[i];
        arr[i] = minvalue;
        arr[minindex] = tmpValue;
      }
    }

  return arr;
}
