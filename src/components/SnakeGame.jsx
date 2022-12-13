/* eslint-disable no-constant-condition */
/* eslint-disable no-continue */
/* eslint-disable no-shadow */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
// eslint-disable-next-line max-classes-per-file
import React, { useEffect, useState } from 'react';
import {
  RiArrowDownSFill, RiArrowLeftSFill, RiArrowRightSFill, RiArrowUpSFill,
} from 'react-icons/ri';
import {
  randomIntFromInterval,
  reverseLinkedList,
  useInterval,
} from '../lib/utils';
import baut from '../assets/svg/baut.svg';

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new LinkedListNode(value);
    this.head = node;
    this.tail = node;
  }
}

const Direction = {
  UP: 'UP',
  RIGHT: 'RIGHT',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
};

const BOARD_SIZE = 24;
const PROBABILITY_OF_DIRECTION_REVERSAL_FOOD = 0.3;

const getStartingSnakeLLValue = (board) => {
  const rowSize = board.length;
  const colSize = board[0].length;
  const startingRow = Math.round(rowSize / 3);
  const startingCol = Math.round(colSize / 3);
  const startingCell = board[startingRow][startingCol];
  return {
    row: startingRow,
    col: startingCol,
    cell: startingCell,
  };
};

const SnakeGame = () => {
  const [score, setScore] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [board, setBoard] = useState(createBoard(BOARD_SIZE));
  const [startGame, setStartGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [snake, setSnake] = useState(
    new LinkedList(getStartingSnakeLLValue(board)),
  );
  const [snakeCells, setSnakeCells] = useState(
    new Set([snake.head.value.cell]),
  );
  const [foodCell, setFoodCell] = useState(snake.head.value.cell + 5);
  const [direction, setDirection] = useState(Direction.RIGHT);
  const [foodShouldReverseDirection, setFoodShouldReverseDirection] = useState(
    false,
  );

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      handleKeydown(e);
    });
  }, []);

  const handleKeydown = (e) => {
    const newDirection = getDirectionFromKey(e.key);
    const isValidDirection = newDirection !== '';
    if (!isValidDirection) return;
    const snakeWillRunIntoItself = getOppositeDirection(newDirection) === direction && snakeCells.size > 1;

    if (snakeWillRunIntoItself) return;
    setDirection(newDirection);
  };

  const moveSnake = () => {
    const currentHeadCoords = {
      row: snake.head.value.row,
      col: snake.head.value.col,
    };

    const nextHeadCoords = getCoordsInDirection(currentHeadCoords, direction);
    if (isOutOfBounds(nextHeadCoords, board)) {
      setCurrentScore(score);
      handleGameOver();
      setStartGame(false);
      setGameOver(true);
      return;
    }
    const nextHeadCell = board[nextHeadCoords.row][nextHeadCoords.col];
    if (snakeCells.has(nextHeadCell)) {
      setCurrentScore(score);
      handleGameOver();
      setStartGame(false);
      setGameOver(true);
      return;
    }

    const newHead = new LinkedListNode({
      row: nextHeadCoords.row,
      col: nextHeadCoords.col,
      cell: nextHeadCell,
    });
    const currentHead = snake.head;
    snake.head = newHead;
    currentHead.next = newHead;

    const newSnakeCells = new Set(snakeCells);
    newSnakeCells.delete(snake.tail.value.cell);
    newSnakeCells.add(nextHeadCell);

    snake.tail = snake.tail.next;
    if (snake.tail === null) snake.tail = snake.head;

    const foodConsumed = nextHeadCell === foodCell;
    if (foodConsumed) {
      growSnake(newSnakeCells);
      if (foodShouldReverseDirection) reverseSnake();
      handleFoodConsumption(newSnakeCells);
    }

    setSnakeCells(newSnakeCells);
  };

  const growSnake = (newSnakeCells) => {
    const growthNodeCoords = getGrowthNodeCoords(snake.tail, direction);
    if (isOutOfBounds(growthNodeCoords, board)) {
      return;
    }
    const newTailCell = board[growthNodeCoords.row][growthNodeCoords.col];
    const newTail = new LinkedListNode({
      row: growthNodeCoords.row,
      col: growthNodeCoords.col,
      cell: newTailCell,
    });
    const currentTail = snake.tail;
    snake.tail = newTail;
    snake.tail.next = currentTail;

    newSnakeCells.add(newTailCell);
  };

  const reverseSnake = () => {
    const tailNextNodeDirection = getNextNodeDirection(snake.tail, direction);
    const newDirection = getOppositeDirection(tailNextNodeDirection);
    setDirection(newDirection);
    reverseLinkedList(snake.tail);
    const snakeHead = snake.head;
    snake.head = snake.tail;
    snake.tail = snakeHead;
  };

  const handleFoodConsumption = (newSnakeCells) => {
    const maxPossibleCellValue = BOARD_SIZE * BOARD_SIZE;
    let nextFoodCell;
    while (true) {
      nextFoodCell = randomIntFromInterval(1, maxPossibleCellValue);
      if (newSnakeCells.has(nextFoodCell) || foodCell === nextFoodCell) { continue; }
      break;
    }

    const nextFoodShouldReverseDirection = Math.random() < PROBABILITY_OF_DIRECTION_REVERSAL_FOOD;

    setFoodCell(nextFoodCell);
    setFoodShouldReverseDirection(nextFoodShouldReverseDirection);
    setScore(score + 1);
  };

  const handleGameOver = () => {
    const snakeLLStartingValue = getStartingSnakeLLValue(board);
    setSnake(new LinkedList(snakeLLStartingValue));
    setFoodCell(snakeLLStartingValue.cell + 5);
    setSnakeCells(new Set([snakeLLStartingValue.cell]));
    setDirection(Direction.RIGHT);
    setScore(0);
  };
  const startHandler = () => {
    setStartGame(!startGame);
  };
  const startAgain = () => {
    setStartGame(true);
    setGameOver(false);
  };
  useInterval(() => {
    if (startGame) {
      moveSnake();
    } else {
      handleGameOver();
    }
  }, 150);
  return (
    <div className="rounded-lg border border-black snake-board w-[510px] h-[475px] flex p-[2rem] justify-between relative">
      <img src={baut} alt="" className="absolute top-2 left-2" />
      <img src={baut} alt="" className="absolute top-2 right-2" />
      <img src={baut} alt="" className="absolute bottom-2 left-2" />
      <img src={baut} alt="" className="absolute bottom-2 right-2" />
      <div className="w-[238.69px] h-[405.32px] bg-lightPrimary rounded-lg flex flex-col items-center justify-start snake-place relative">
        <span className="absolute top-0 text-myWhite">{score}</span>
        <div className="border-b border-dropDown">
          {board.map((row, rowIdx) => (
            <div key={rowIdx} className="flex">
              {row.map((cellValue, cellIdx) => {
                const className = getCellClassName(
                  cellValue,
                  foodCell,
                  foodShouldReverseDirection,
                  snakeCells,
                );
                return <div key={cellIdx} className={className} />;
              })}
            </div>
          ))}
        </div>
        <div className={`${gameOver && 'hidden'} w-[122px] h-[38px] bg-orangeButton flex rounded-lg justify-center items-center mt-[4rem] cursor-pointer active:translate-y-2 transition-all ease-in-out duration-300`} onClick={startHandler}>{startGame ? 'end-game' : 'start-game'}</div>
        {gameOver && (
        <div className="w-full flex flex-col items-center gap-10">
          <div className="w-full h-[48px] bg-mediumPrimary rounded-lg flex items-center justify-center">
            <span className="uppercase text-myGreen text-lg">game-over</span>
          </div>
          <span className="text-mySlate cursor-pointer" onClick={startAgain}>start-again</span>
        </div>
        )}
      </div>
      <div>
        <div className="rules w-[181.38px] h-auto rounded-lg p-[1rem]">
          <span className="text-myWhite text-sm">// use keyboard <br />
            // arrows to play
          </span>
          <div className="h-[28.69px] w-[49.08px] mt-2 rounded-lg bg-darkPrimary text-myWhite flex items-center justify-center text-xl mx-auto">
            <RiArrowUpSFill />
          </div>
          <div className="flex gap-1">
            <div className="h-[28.69px] w-[49.08px] mt-2 rounded-lg bg-darkPrimary text-myWhite flex items-center justify-center text-xl mx-auto">
              <RiArrowLeftSFill />
            </div>
            <div className="h-[28.69px] w-[49.08px] mt-2 rounded-lg bg-darkPrimary text-myWhite flex items-center justify-center text-xl mx-auto">
              <RiArrowDownSFill />
            </div>
            <div className="h-[28.69px] w-[49.08px] mt-2 rounded-lg bg-darkPrimary text-myWhite flex items-center justify-center text-xl mx-auto">
              <RiArrowRightSFill />
            </div>
          </div>
        </div>
        <div className="pt-[4rem] text-sm">
          <div className="flex items-center gap-3 text-myWhite">
            <span className="h-[10px] w-[10px] rounded-full bg-myGreen" />
            <span>// normal food</span>
          </div>
          <div className="flex items-center gap-3 text-myWhite">
            <span className="h-[10px] w-[10px] rounded-full bg-linkColor" />
            <span>// teleport food</span>
          </div>
        </div>
        <div className="h-[38px] w-auto rounded-lg border border-myWhite text-myWhite flex items-center justify-center mt-[5rem]">
          current-score:{currentScore}
        </div>
      </div>
    </div>
  );
};

const createBoard = (BOARD_SIZE) => {
  let counter = 1;
  const board = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    const currentRow = [];
    for (let col = 0; col < BOARD_SIZE; col++) {
      currentRow.push(counter++);
    }
    board.push(currentRow);
  }
  return board;
};

const getCoordsInDirection = (coords, direction) => {
  if (direction === Direction.UP) {
    return {
      row: coords.row - 1,
      col: coords.col,
    };
  }
  if (direction === Direction.RIGHT) {
    return {
      row: coords.row,
      col: coords.col + 1,
    };
  }
  if (direction === Direction.DOWN) {
    return {
      row: coords.row + 1,
      col: coords.col,
    };
  }
  if (direction === Direction.LEFT) {
    return {
      row: coords.row,
      col: coords.col - 1,
    };
  }
};

const isOutOfBounds = (coords, board) => {
  const { row, col } = coords;
  if (row < 0 || col < 0) return true;
  if (row >= board.length || col >= board[0].length) return true;
  return false;
};

const getDirectionFromKey = (key) => {
  if (key === 'ArrowUp') return Direction.UP;
  if (key === 'ArrowRight') return Direction.RIGHT;
  if (key === 'ArrowDown') return Direction.DOWN;
  if (key === 'ArrowLeft') return Direction.LEFT;
  return '';
};

const getNextNodeDirection = (node, currentDirection) => {
  if (node.next === null) return currentDirection;
  const { row: currentRow, col: currentCol } = node.value;
  const { row: nextRow, col: nextCol } = node.next.value;
  if (nextRow === currentRow && nextCol === currentCol + 1) {
    return Direction.RIGHT;
  }
  if (nextRow === currentRow && nextCol === currentCol - 1) {
    return Direction.LEFT;
  }
  if (nextCol === currentCol && nextRow === currentRow + 1) {
    return Direction.DOWN;
  }
  if (nextCol === currentCol && nextRow === currentRow - 1) {
    return Direction.UP;
  }
  return '';
};

const getGrowthNodeCoords = (snakeTail, currentDirection) => {
  const tailNextNodeDirection = getNextNodeDirection(
    snakeTail,
    currentDirection,
  );
  const growthDirection = getOppositeDirection(tailNextNodeDirection);
  const currentTailCoords = {
    row: snakeTail.value.row,
    col: snakeTail.value.col,
  };
  const growthNodeCoords = getCoordsInDirection(
    currentTailCoords,
    growthDirection,
  );
  return growthNodeCoords;
};

const getOppositeDirection = (direction) => {
  if (direction === Direction.UP) return Direction.DOWN;
  if (direction === Direction.RIGHT) return Direction.LEFT;
  if (direction === Direction.DOWN) return Direction.UP;
  if (direction === Direction.LEFT) return Direction.RIGHT;
};

const getCellClassName = (
  cellValue,
  foodCell,
  foodShouldReverseDirection,
  snakeCells,
) => {
  let className = 'w-[10px] h-[10px]';
  if (cellValue === foodCell) {
    if (foodShouldReverseDirection) {
      className = 'w-[10px] h-[10px] rounded-full animate-pulse bg-linkColor';
    } else {
      className = 'w-[10px] h-[10px] bg-myGreen rounded-full shadow-xl shadow-white animate-pulse';
    }
  }
  if (snakeCells.has(cellValue)) className = 'w-[10px] h-[10px] rounded-full bg-myGreen';

  return className;
};

export default SnakeGame;
