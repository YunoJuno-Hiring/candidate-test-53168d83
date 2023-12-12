import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import CharacterFilters from './CharacterFilters';
import FilterContextProvider from '@contexts/FilterContext';

const meta: Meta<typeof CharacterFilters> = {
  component: CharacterFilters,
  decorators: [
    (Story) => (
      <FilterContextProvider>
        <Story />
      </FilterContextProvider>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof CharacterFilters>;

export const Default: Story = {
  render: () => <CharacterFilters />
};
