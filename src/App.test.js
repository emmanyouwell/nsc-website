import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders app without crashing', () => {
  // Just test that the app renders without throwing an error
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // If we get here without an error, the test passes
});
