import { CharacterCard } from '@components/CharacterCard';
import { LoadingSpinner } from '@components/LoadingSpinner';
import { ICharacter } from '@custom-types/character';
import { UseFetchCharactersResponse } from '@custom-types/hooks';
import { useFetchCharacterList } from '@hooks/useFetchCharacterList';
import React from 'react';

export default function CharacterList() {
  const { loading, characterList }: UseFetchCharactersResponse = useFetchCharacterList(
    `${process.env.REACT_APP_CHARACTER_LIST_URL}`
  );

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      {!loading &&
        characterList &&
        characterList.map((character: ICharacter, key: number) => (
          <CharacterCard characterData={character} key={key} />
        ))}
    </div>
  );
}
