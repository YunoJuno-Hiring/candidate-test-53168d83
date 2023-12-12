import React from 'react';
import { generateMockCharacter } from '@mocks/character';
import CharacterCard from './CharacterCard';
import renderer from 'react-test-renderer';

const mockCharacterData = generateMockCharacter({ category: 'hobbit' });

describe('CharacterCard', () => {
  it('matches the DOM snapshot', () => {
    const component = renderer.create(<CharacterCard characterData={mockCharacterData} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
