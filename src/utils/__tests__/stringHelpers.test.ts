import { capitaliseFirstChar } from '@utils/stringHelpers';

describe('stringHelper functions', () => {
  describe('capitaliseFirstChar', () => {
    it('should capitalise the first letter of the string and return it', () => {
      const result = capitaliseFirstChar('test');
      expect(result).toStrictEqual('Test');
    });
  });
});
