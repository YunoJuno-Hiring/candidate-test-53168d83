import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from './LoadingSpinner';
import FilterContextProvider from '@contexts/FilterContext';

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
