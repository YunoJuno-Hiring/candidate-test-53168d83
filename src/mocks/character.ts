import { ICharacter } from '@custom-types/character';

export function generateMockCharacter(overrides?: Partial<ICharacter>): ICharacter {
  const mockCharacter = {
    name: 'Gandalf the Grey',
    category: 'wizard' as const,
    description:
      'A wizard best known among hobbits for his fireworks and mischievous sense of humor, but actually one of the greatest powers of Middle-earth. He reveals the truth about the Ring to Frodo and acts as a guide and counselor.',
    significanceIndex: 1,
    avatar: 'gandalf_the_grey.jpg'
  };

  return { ...mockCharacter, ...overrides };
}
