import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './styles/theme';

test('renders the hero heading', () => {
  render(
    <ThemeProvider theme={theme}>
      <MemoryRouter
        initialEntries={['/']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </MemoryRouter>
    </ThemeProvider>
  );
  expect(
    screen.getByText(/find your perfect property/i)
  ).toBeInTheDocument();
});
