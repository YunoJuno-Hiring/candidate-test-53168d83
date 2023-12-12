import { CharacterCard } from '@components/CharacterCard';
import { useFetchCharacters } from '@hooks/useFetchCharacters';
import React from 'react';
import { LoadingSpinner } from '@components/LoadingSpinner';
import { Character } from '@custom-types/character';
import { UseFetchCharactersProps } from '@custom-types/hooks';
import styles from './CharacterList.module.scss';

export default function CharacterList() {
  const { loading, characterList }: UseFetchCharactersProps = useFetchCharacters(
    `${process.env.REACT_APP_CHARACTER_LIST_URL}`
  );

  if (loading) return <LoadingSpinner />;

  return (
    <div className={styles['CharacterList-container']}>
      {!loading &&
        characterList &&
        characterList.map((character: Character, key: number) => (
          <CharacterCard characterData={character} key={key} />
        ))}
    </div>
  );
}
