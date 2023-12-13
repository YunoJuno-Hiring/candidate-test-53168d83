import { orderByStrings } from '@constants/strings';
import { TCharacterCategories } from './character';

export type TOrderBy = (typeof orderByStrings)[keyof typeof orderByStrings];

export type TContextValue = 'category' | 'orderBy';

export interface IFilterContext {
  category: TCharacterCategories | 'all';
  orderBy: TOrderBy;
}
