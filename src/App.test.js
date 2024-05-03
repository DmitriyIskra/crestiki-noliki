import { render, screen } from '@testing-library/react';
import App from './App';
import checkWinner from './js/checkWinner';

const cellsSet = [symbol_x, symbol_x, symbol_x, null, null, null, null, null, null];

// test('test check winner', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('test check winner', () => {
  const isWin = checkWinner(cells);
  expect(isWin).toBe(); // ???????
});
