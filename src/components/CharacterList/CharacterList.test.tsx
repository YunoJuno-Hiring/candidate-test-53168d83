import React from 'react';
import { CharacterList } from '..';
import { cleanup, render } from '@testing-library/react';
import { generateMockCharacter } from '@mocks/character';
import renderer from 'react-test-renderer';

import * as useFetchMock from '@hooks/useFetchCharacterList';

const mockCharacter = generateMockCharacter();

afterEach(() => {
  cleanup();
});

describe('CharacterList component', () => {
  describe('When loading is true', () => {
    it('should return a loading spinner', () => {
      jest.spyOn(useFetchMock, 'useFetchCharacterList').mockReturnValue({
        loading: true,
        characterList: []
      });
      const component = render(<CharacterList />);
      expect(component.getByTestId('loading-spinner')).toBeDefined();
    });
  });

  describe('When loading is false', () => {
    it('should return a list of character cards', () => {
      jest.spyOn(useFetchMock, 'useFetchCharacterList').mockReturnValue({
        loading: false,
        characterList: [mockCharacter]
      });
      const component = render(<CharacterList />);

      expect(component.getByText(mockCharacter.name)).toBeDefined();
    });

    it('Should Match DOM snapshot', () => {
      jest.spyOn(useFetchMock, 'useFetchCharacterList').mockReturnValue({
        loading: false,
        characterList: [mockCharacter, mockCharacter, mockCharacter]
      });

      const component = renderer.create(<CharacterList />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
