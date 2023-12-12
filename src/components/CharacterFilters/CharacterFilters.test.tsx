import React from 'react';
import renderer from 'react-test-renderer';
import CharacterFilters from './CharacterFilters';
import FilterContextProvider from '@contexts/FilterContext';

describe('CharacterFilters', () => {
  it('Should match the DOM snapshot', () => {
    const component = renderer
      .create(
        <FilterContextProvider>
          <CharacterFilters />
        </FilterContextProvider>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
