import type { Meta, StoryObj } from '@storybook/react';
import CharacterCard from './CharacterCard';
import { generateMockCharacter } from '@mocks/character';
import { ICharacter } from '@custom-types/character';

const meta: Meta<typeof CharacterCard> = {
  component: CharacterCard,
  tags: ['autodocs']
};

export default meta;

const mockCharacter: ICharacter = generateMockCharacter();

type Story = StoryObj<typeof CharacterCard>;
export const Default: Story = {
  args: {
    characterData: {
      ...mockCharacter
    }
  }
};
