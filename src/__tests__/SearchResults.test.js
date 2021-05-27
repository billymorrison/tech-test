import { render, screen } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe('SearchResults', () => {
  it('renders on load', () => {
    const { getByText} = render(
      <SearchResults />
    )

    expect(getByText('Search Results')).toBeTruthy();
  })
})
