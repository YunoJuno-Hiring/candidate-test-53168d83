import { ICharacter } from '@custom-types/character';
import { IFilterContext } from '@custom-types/contexts';

export function handleFilters(characterList: ICharacter[], selectedValues: IFilterContext) {
  const { category, orderBy } = selectedValues;

  let filteredCharacterList = characterList;

  if (category !== 'all') {
    filteredCharacterList = filterCharacterListByCategory(filteredCharacterList, category);
  }

  switch (orderBy) {
    case 'alphabetical':
      break;
    case 'significance':
      filteredCharacterList = orderBySignificanceIndex(filteredCharacterList);
      break;
    default:
      break;
  }

  return filteredCharacterList;
}

export function filterCharacterListByCategory(
  characterList: ICharacter[],
  category: string
): ICharacter[] {
  return characterList.filter((character) => character.category === category);
}

export function orderBySignificanceIndex(characterList: ICharacter[]): ICharacter[] {
  return characterList.sort((a, b) => a.significanceIndex - b.significanceIndex);
}
