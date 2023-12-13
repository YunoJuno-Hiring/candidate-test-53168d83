import * as strings from '@constants/strings';

const { characterCategoryStrings } = strings;

export type TCharacterCategories =
  (typeof characterCategoryStrings)[keyof typeof characterCategoryStrings];

export interface ICharacter {
  category: TCharacterCategories;
  name: string;
  description: string;
  significanceIndex: number;
  avatar: string;
}
