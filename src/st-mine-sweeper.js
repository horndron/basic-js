import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let mineArr = [];

  for(let i = 0; i < matrix.length; i++) {
    let tmpArray = [];
    

    for(let j = 0; j < matrix[i].length; j++) {
      let countMine = 0;
      let sublightElem = [];
      

      if((i - 1) >= 0 && (j - 1) >= 0) {
        sublightElem.push(matrix[i-1][j-1]);
        sublightElem.push(matrix[i-1][j]);
        sublightElem.push(matrix[i][j-1]);
      }

      if(i == 0 && (j - 1) >= 0) {
        sublightElem.push(matrix[i][j-1]);
      }
      if((i - 1) > 1 && j == matrix[i].length -1) {
        sublightElem.push(matrix[i-1][j]);
      }
      if((i + 1) < matrix.length && j == matrix[i].length -1) {
        sublightElem.push(matrix[i+1][j]);
      }
      if((i + 1) < matrix.length && (j - 1) >= 0) {
        sublightElem.push(matrix[i+1][j-1]);
      }
      if(i == matrix.length - 1 && (j - 1) > 1) {
        sublightElem.push(matrix[i][j-1]);
      }
      if((i - 1) >= 0 && (j + 1) < matrix[i].length) {
        sublightElem.push(matrix[i-1][j+1]);
      }
      if(i == matrix.length - 1 && (j + 1) < matrix[i].length) {
        sublightElem.push(matrix[i][j+1]);
      }
      if((i - 1) >= 0 && j == 0) {
        sublightElem.push(matrix[i-1][j]);
      }
      

      if((i + 1) < matrix.length && (j + 1) < matrix[i].length) {

        sublightElem.push(matrix[i+1][j]);
        sublightElem.push(matrix[i][j+1]);
        sublightElem.push(matrix[i+1][j+1]);

      } 

  

      countMine = sublightElem.filter(item => item == true).length;
      tmpArray.push(countMine);
    }
    mineArr.push(tmpArray);
      
    }
  
  return mineArr;
}
