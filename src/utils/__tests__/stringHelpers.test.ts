import { capitaliseFirstChar, capitaliseFirstCharacters } from '@utils/stringHelpers';

describe('stringHelper functions', () => {
  describe('capitaliseFirstChar', () => {
    it('should capitalise the first letter of the string and return it', () => {
      const result = capitaliseFirstChar('test');
      expect(result).toStrictEqual('Test');
    });
  });

  describe('capitaliseFirstChars', () => {
    it('should capitalise the first letter of every word in the string and return it', () => {
      const result = capitaliseFirstCharacters('this is A Test to See');
      expect(result).toStrictEqual('This Is A Test To See');
    });
  });
});
