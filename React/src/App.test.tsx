import { render } from '@testing-library/react';
import App from './App.tsx';

test('renders the scheduler and the list', () => {
  const { container } = render(<App />);
  expect(container.querySelector('.dx-scheduler')).toBeTruthy();
  expect(container.querySelector('.dx-list')).toBeTruthy();
});
