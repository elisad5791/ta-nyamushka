import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App.js';

test('renders App component', () => {
  render(<App />);
  expect(screen.getByText(/Ты сегодня покормил кота?/)).toBeInTheDocument();
  expect(screen.getAllByText(/Сказочное заморское явство/)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/Нямушка/)[0]).toBeInTheDocument();
  expect(screen.getByText(/10 порций/)).toBeInTheDocument();
  expect(screen.getByText(/с рыбой/)).toBeInTheDocument();
  expect(screen.getByText(/5 мышей в подарок/)).toBeInTheDocument();
  expect(screen.getByText(/Печалька/)).toBeInTheDocument();

  const items = screen.getAllByText(/купи/);
  expect(items).toHaveLength(2);
  expect(screen.queryByText(/Печень утки разварная с артишоками/)).toBeNull();

  userEvent.click(screen.getAllByRole('button')[0]);
  const newItems = screen.getAllByText(/купи/);
  expect(newItems).toHaveLength(1);
  expect(screen.getByText(/Печень утки разварная с артишоками/)).toBeInTheDocument();
});
