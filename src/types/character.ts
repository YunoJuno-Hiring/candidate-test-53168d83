import * as stringConstants from '@constants/strings';

const { characterCategoryStrings } = stringConstants;

export type TCharacterCategories =
  (typeof characterCategoryStrings)[keyof typeof characterCategoryStrings];

export interface ICharacter {
  category: TCharacterCategories;
  name: string;
  description: string;
  significanceIndex: number;
  avatar: string;
}
