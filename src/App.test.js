import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import App from './App';

const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(ui, {wrapper: BrowserRouter}),
  }
}

test('full dashboard rendering/navigating', async () => {
  const {user} = renderWithRouter(<App />)
  expect(screen.getByText(/Account Value:/i)).toBeInTheDocument()
  expect(screen.getByText(/Wallet DashBoard/i)).toBeInTheDocument()
  expect(screen.getByText(/Current Holdings:/i)).toBeInTheDocument()
  expect(screen.getByText(/DigitalCurrency.Crypto Wallet/i)).toBeInTheDocument()
  expect(screen.getByText(/Watchlist/i)).toBeInTheDocument()

  await user.click(screen.getByText(/Sell/i))

  expect(screen.getByText(/Sell Page/i)).toBeInTheDocument()

  await user.click(screen.getByText(/Buy/i))

  expect(screen.getByText(/Buy Page/i)).toBeInTheDocument()

  await user.click(screen.getByText(/Send/i))

  expect(screen.getByText(/Send Page/i)).toBeInTheDocument()

  await user.click(screen.getByText(/Receive/i))

  expect(screen.getByText(/Receive Page/i)).toBeInTheDocument()

  await user.click(screen.getByText(/Swap/i))

  expect(screen.getByText(/Swap Page/i)).toBeInTheDocument()

  await user.click(screen.getByText(/Stake/i))

  expect(screen.getByText(/Stake Page/i)).toBeInTheDocument()
})

