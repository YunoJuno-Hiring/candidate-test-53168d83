import { generateMockCharacter } from '@mocks/character';
import { render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import CharacterCard from './CharacterCard';

const mockCharacterData = generateMockCharacter({ category: 'hobbit' });

beforeEach(() => {
  process.env.REACT_APP_AVATAR_DIR = '/test-location/';
});

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
