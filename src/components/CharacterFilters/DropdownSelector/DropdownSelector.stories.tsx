import React from 'react';

import FilterContextProvider from '@contexts/FilterContext';
import { TContextValue } from '@custom-types/contexts';
import type { Meta, StoryObj } from '@storybook/react';
import DropdownSelector from './DropdownSelector';

const meta: Meta<typeof DropdownSelector> = {
  component: DropdownSelector,
  decorators: [
    (Story) => (
      <FilterContextProvider>
        <Story />
      </FilterContextProvider>
    )
  ],
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof DropdownSelector>;

export const Default: Story = {
  args: {
    selectOptions: ['one', 'two', 'three'],
    contextValue: 'category' as TContextValue,
    label: 'Order by'
  }
};
