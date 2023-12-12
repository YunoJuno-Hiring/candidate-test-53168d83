import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CharacterCard from './CharacterCard';
import { generateMockCharacter } from '@mocks/character';

const meta: Meta<typeof CharacterCard> = {
  component: CharacterCard
};

export default meta;

type Story = StoryObj<typeof CharacterCard>;
const mockCharacter = generateMockCharacter();
export const Main: Story = {
  args: {
    characterData: {
      ...mockCharacter
    }
  }
};
