import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('App', () => {
  it('renders on load', () => {
    const { getByTestId } = render(
      <App />
    )

    expect(getByTestId('app')).toBeInTheDocument();
  })
})
