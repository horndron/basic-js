import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const copyArr = arr.slice();
  const result = [];

  for (let i = 0; i < copyArr.length; i++) {
    if(copyArr[i] == '--discard-next') {
      copyArr.splice(i+1, 1);
      i++;
    } else if(copyArr[i] == '--discard-prev') {
      result.pop();
    } else if(copyArr[i] == '--double-next') {
      if(i+1 < copyArr.length) result.push(copyArr[i+1]);
      
    } else if(copyArr[i] == '--double-prev') {
      if(Number(copyArr[i-1])){
        result.push(copyArr[i-1]);
      }
      
    } else {
      result.push(copyArr[i]);
    }

    

  }

  return result;
}

