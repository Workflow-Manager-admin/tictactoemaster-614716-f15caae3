import React from 'react';
import './App.css';
import TicTacToe from './components/TicTacToe';
import './components/TicTacToe.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> TicTacToe Master
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="hero">
            <h1 className="title">TicTacToe Master</h1>
            <div className="description">
              A classic game of Tic Tac Toe. Take turns marking the grid and try to get three in a row!
            </div>
            <TicTacToe />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;