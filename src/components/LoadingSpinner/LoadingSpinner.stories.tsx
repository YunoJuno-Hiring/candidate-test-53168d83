import React from 'react';

import FilterContextProvider from '@contexts/FilterContext';
import type { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from './LoadingSpinner';

const meta: Meta<typeof LoadingSpinner> = {
  component: LoadingSpinner,
  decorators: [
    (Story) => (
      <FilterContextProvider>
        <Story />
      </FilterContextProvider>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {
  render: () => <LoadingSpinner />
};
