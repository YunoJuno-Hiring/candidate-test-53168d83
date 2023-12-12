import React from 'react';
import { generateMockCharacter } from '@mocks/character';
import CharacterCard from './CharacterCard';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

const mockCharacterData = generateMockCharacter({ category: 'hobbit' });

describe('CharacterCard', () => {
  it('matches the DOM snapshot', () => {
    const component = renderer.create(<CharacterCard characterData={mockCharacterData} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Displays the character data', () => {
    const component = render(<CharacterCard characterData={mockCharacterData} />);
    expect(component.getByText(mockCharacterData.name)).toBeDefined();
    expect(component.getByText(mockCharacterData.description)).toBeDefined();
  });

  it('Capitalises the first letter of the category', () => {
    const component = render(<CharacterCard characterData={mockCharacterData} />);
    expect(component.getByText('Hobbit')).toBeDefined();
  });
});
