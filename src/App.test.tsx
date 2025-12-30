import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders app without crashing', async () => {
  render(<App />);
  // Wait for loading to finish and content to appear
  await waitFor(() => {
    // Search for any of the likely content containers or the error state
    const content = document.querySelector('div[id], section, nav');
    expect(content).toBeInTheDocument();
  }, { timeout: 5000 });
});
