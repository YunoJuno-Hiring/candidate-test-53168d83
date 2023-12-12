import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import CharacterList from './CharacterList';

const meta: Meta<typeof CharacterList> = {
  component: CharacterList
};

export default meta;

type Story = StoryObj<typeof CharacterList>;

export const Default: Story = {
  render: () => <CharacterList />
};
