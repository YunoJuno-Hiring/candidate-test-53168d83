import FilterContextProvider from '@contexts/FilterContext';
import React from 'react';
import renderer from 'react-test-renderer';
import CharacterFilters from './CharacterFilters';

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
