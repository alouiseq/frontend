/*
Since there are 3 validation checks needed to validate a sudoku board, we could
use 3 separate iteration logic validate the board. If at any point does it fail,
the board is invalidated and should return False.

Iteration1: check each row and test 1 <= rowValue <= 9, if not return False
Iteration2: check each column and test 1 <= colValue <= 9, if not return False
Iteration3: check each sub square of 3x3 and test 1 <= rowValue <= 9, if not return False
 */

const BOARD_MIN = 1;
const BOARD_MAX = 9;
const SUB_BOX_MAX = 3;

const buildBuckets = (max=BOARD_MAX, min=BOARD_MIN) => {
  const buckets = {};
  for(let i=min; i<=max; i++) {
    buckets[i] = false;
  }
  return buckets;
}

const rowIterator = (board) => {
  let buckets = buildBuckets();
  let value = null;

  for(let row=0; row<BOARD_MAX; row++) {
    for(let col=0; col<BOARD_MAX; col++) {
      value = parseInt(board[row][col]);
      if (!Number.isNaN(value)) {
	if (value <= BOARD_MAX && value >= BOARD_MIN && !buckets[value]) {
	  buckets[value] = true;
	} else {
	  return false;
	}
      }
    }
    buckets = buildBuckets();
  };
  return true;
};

const columnIterator = (board) => {
  let buckets = buildBuckets();
  let value = null;

  for(let col=0; col<BOARD_MAX; col++) {
    for(let row=0; row<BOARD_MAX; row++) {
      value = parseInt(board[row][col]);
      if (!Number.isNaN(value)) {
	if (value <= BOARD_MAX && value >= BOARD_MIN && !buckets[value]) {
	  buckets[value] = true;
	} else {
	  return false;
	}
      }
    }
    buckets = buildBuckets();
  };
  return true;
};

const subBoxIterator = (board) => {
  let buckets = buildBuckets();
  let value = null;
  let row = 0;
  let col = 0;
  let boxRow = 0;
  let boxCol = 0;

  // iterate outer box
  while(true) {
    // iterate sub box
    for(let i=0; i<SUB_BOX_MAX; i++) {
      row = i + (boxRow * SUB_BOX_MAX);

      for(let j=0; j<SUB_BOX_MAX; j++) {
	col = j + (boxCol * SUB_BOX_MAX);
	value = parseInt(board[row][col]);
	if (!Number.isNaN(value)) {
	  if (value <= BOARD_MAX && value >= BOARD_MIN && !buckets[value]) {
	    buckets[value] = true;
	  } else {
	    return false;
	  }
	}
      }
    };
    buckets = buildBuckets();

    if (boxCol < SUB_BOX_MAX) {
      boxCol++;
    } else if (++boxRow < SUB_BOX_MAX) {
      boxCol = 0;
    } else {
      break;
    }
  }
  return true;
}

const isValidSudoku = (board) => {
  const areRowsValid = rowIterator(board);
  const areColumnsValid = columnIterator(board);
  const areSubBoxesValid = subBoxIterator(board);
  return areRowsValid && areColumnsValid && areSubBoxesValid;
};

const board1 = [
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8","5","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
];

const board2 = [
 ["5","3","7",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
];

const board3 = [
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,["6",".",".",".","8",".",".","7","9"]
];

const board4 = [
 ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","0",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
];

const board5 = [
 ["9","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
];

console.log(`BOARD 1 EXPECTED true, OUTPUT: ${isValidSudoku(board1)}`);
console.log(`BOARD 2 EXPECTED false, OUTPUT: ${isValidSudoku(board2)}`);
console.log(`BOARD 3 EXPECTED false, OUTPUT: ${isValidSudoku(board3)}`);
console.log(`BOARD 4 EXPECTED false, OUTPUT: ${isValidSudoku(board4)}`);
console.log(`BOARD 5 EXPECTED false, OUTPUT: ${isValidSudoku(board5)}`);

