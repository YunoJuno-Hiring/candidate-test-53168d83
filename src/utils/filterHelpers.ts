import { ICharacter } from '@custom-types/character';
import { IFilterContext } from '@custom-types/contexts';

export function handleFilters(characterList: ICharacter[], selectedValues: IFilterContext) {
  const { category, orderBy } = selectedValues;

  let filteredCharacterList = characterList;

  filteredCharacterList = filterCharacterListByCategory(filteredCharacterList, category);

  switch (orderBy) {
    case 'alphabetical':
      filteredCharacterList = orderCharacterListAlphabetically(filteredCharacterList);
      break;
    case 'significance':
      filteredCharacterList = orderCharacterListBySignificance(filteredCharacterList);
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
  if (category !== 'all') {
    return characterList.filter((character) => character.category === category);
  }
  return characterList;
}

export function orderCharacterListBySignificance(characterList: ICharacter[]): ICharacter[] {
  return characterList.sort((a, b) => a.significanceIndex - b.significanceIndex);
}

export function orderCharacterListAlphabetically(characterList: ICharacter[]): ICharacter[] {
  return characterList.sort((a, b) => a.name.localeCompare(b.name, 'en'));
}
