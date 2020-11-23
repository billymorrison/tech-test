import { render, screen } from '@testing-library/react';
import Search from '../components/Search';

describe('App', () => {
  it('renders on load', () => {
    const { getByTestId, getByLabelText } = render(
      <Search />
    )

    expect(getByTestId('text-input')).toBeInTheDocument();
  })
})
