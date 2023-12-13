import { generateMockCharacter } from '@mocks/character';
import { ICharacter } from '@custom-types/character';
import {
  filterCharacterListByCategory,
  orderCharacterListAlphabetically,
  orderCharacterListBySignificance
} from '@utils/filterHelpers';

afterEach(() => {
  jest.clearAllMocks();
});

describe('filterHelpers', () => {
  describe('filterCharacterListByCategory', () => {
    describe('When category is all', () => {
      it('should return the array unaltered', () => {
        const mockCharacterList: ICharacter[] = [
          generateMockCharacter({ category: 'hobbit' }),
          generateMockCharacter({ category: 'human' }),
          generateMockCharacter({ category: 'elf' })
        ];
        const result = filterCharacterListByCategory(mockCharacterList, 'all');
        expect(result).toStrictEqual(mockCharacterList);
      });
    });
    describe('When category is hobbit', () => {
      it('Should return an array of items with hobbit as the category', () => {
        const mockCharacterList: ICharacter[] = [
          generateMockCharacter({ category: 'hobbit' }),
          generateMockCharacter({ category: 'human' }),
          generateMockCharacter({ category: 'elf' }),
          generateMockCharacter({ category: 'hobbit' }),
          generateMockCharacter({ category: 'hobbit' })
        ];
        const result = filterCharacterListByCategory(mockCharacterList, 'hobbit');
        expect(result).toHaveLength(3);
        expect(result[0].category).toEqual('hobbit');
        expect(result[1].category).toEqual('hobbit');
        expect(result[2].category).toEqual('hobbit');
      });
    });
  });

  describe('orderCharacterListBySignificance', () => {
    it('should sort the array in ascending order by significanceIndex', () => {
      const mockCharacterList: ICharacter[] = [
        generateMockCharacter({ significanceIndex: 3 }),
        generateMockCharacter({ significanceIndex: 1 }),
        generateMockCharacter({ significanceIndex: 4 }),
        generateMockCharacter({ significanceIndex: 5 }),
        generateMockCharacter({ significanceIndex: 2 })
      ];
      const expectedResult: ICharacter[] = [
        generateMockCharacter({ significanceIndex: 1 }),
        generateMockCharacter({ significanceIndex: 2 }),
        generateMockCharacter({ significanceIndex: 3 }),
        generateMockCharacter({ significanceIndex: 4 }),
        generateMockCharacter({ significanceIndex: 5 })
      ];
      const result = orderCharacterListBySignificance(mockCharacterList);
      expect(result).toStrictEqual(expectedResult);
    });
  });

  describe('orderCharacterListAlphabetically', () => {
    it('should sort names alphabetically', () => {
      const mockCharacterList: ICharacter[] = [
        generateMockCharacter({ name: 'Nazgul' }),
        generateMockCharacter({ name: 'Pippin' }),
        generateMockCharacter({ name: 'Sauron' }),
        generateMockCharacter({ name: 'Aragorn' })
      ];
      const expectedResult: ICharacter[] = [
        generateMockCharacter({ name: 'Aragorn' }),
        generateMockCharacter({ name: 'Nazgul' }),
        generateMockCharacter({ name: 'Pippin' }),
        generateMockCharacter({ name: 'Sauron' })
      ];

      const result = orderCharacterListAlphabetically(mockCharacterList);
      expect(result).toStrictEqual(expectedResult);
    });
    it('should sort names with accents over certain letters correctly ', () => {
      const mockCharacterList: ICharacter[] = [
        generateMockCharacter({ name: 'Théoden' }),
        generateMockCharacter({ name: 'Pippin' }),
        generateMockCharacter({ name: 'Éowyn' }),
        generateMockCharacter({ name: 'Éomer' })
      ];
      const expectedResult: ICharacter[] = [
        generateMockCharacter({ name: 'Éomer' }),
        generateMockCharacter({ name: 'Éowyn' }),
        generateMockCharacter({ name: 'Pippin' }),
        generateMockCharacter({ name: 'Théoden' })
      ];

      const result = orderCharacterListAlphabetically(mockCharacterList);
      expect(result).toStrictEqual(expectedResult);
    });
  });
});
