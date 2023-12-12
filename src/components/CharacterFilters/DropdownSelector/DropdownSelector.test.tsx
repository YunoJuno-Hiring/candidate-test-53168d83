import React from 'react';
import renderer from 'react-test-renderer';
import DropdownSelector from './DropdownSelector';
import { TContextValue } from '@custom-types/contexts';
import FilterContextProvider from '@contexts/FilterContext';

const mockDropdownProps = {
  selectOptions: ['One', 'Two', 'Three'],
  contextValue: 'category' as TContextValue
};

describe('DropdownSelector', () => {
  it('Should match the DOM snapshot', () => {
    const component = renderer
      .create(
        <FilterContextProvider>
          <DropdownSelector {...mockDropdownProps} />
        </FilterContextProvider>
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
