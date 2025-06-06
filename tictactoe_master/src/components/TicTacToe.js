import React, { useState } from 'react';

/**
 * TicTacToe game container component that manages the game state and logic.
 * Handles player turns, win conditions, and game status.
 */
const TicTacToe = () => {
  // Game state
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  
  /**
   * Calculate winner by checking all possible winning combinations
   */
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonal
      [2, 4, 6], // diagonal
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  /**
   * Handle click on a square
   */
  const handleClick = (index) => {
    // Create a copy of the board
    const squares = board.slice();
    
    // Return if square is already filled or if game is won
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    
    // Make the move
    squares[index] = isXNext ? 'X' : 'O';
    setBoard(squares);
    setIsXNext(!isXNext);
  };

  /**
   * Reset the game to initial state
   */
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  // Calculate current status
  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(square => square !== null);
  const status = winner 
    ? `Winner: ${winner}`
    : isDraw 
    ? 'Game is a draw!' 
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game-container">
      <div className="status">{status}</div>
      <div className="game-board">
        {board.map((square, index) => (
          <button
            key={index}
            className="square"
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>
      <button className="btn reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
