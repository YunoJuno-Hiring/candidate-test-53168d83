import React from 'react';

import FilterContextProvider from '@contexts/FilterContext';
import type { Meta, StoryObj } from '@storybook/react';
import CharacterList from './CharacterList';

const meta: Meta<typeof CharacterList> = {
  component: CharacterList,
  decorators: [
    (Story) => (
      <FilterContextProvider>
        <Story />
      </FilterContextProvider>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof CharacterList>;

export const Default: Story = {
  render: () => <CharacterList />
};
