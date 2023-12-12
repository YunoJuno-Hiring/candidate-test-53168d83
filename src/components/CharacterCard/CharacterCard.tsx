import { Character } from '@custom-types/character';
import React from 'react';
import styles from './CharacterCard.module.scss';
import { capitaliseFirstChar } from '@utils/stringHelpers';

type CharacterProps = {
  characterData: Character;
};

export default function CharacterCard({ characterData }: CharacterProps) {
  const avatarUrl = `${process.env.REACT_APP_AVATAR_DIR as string}${characterData.avatar}`;
  return (
    <div className={styles['CharacterCard']}>
      <div className={styles['CharacterCard-avatar-wrapper']}>
        <img className={styles['CharacterCard-avatar']} src={avatarUrl} />
      </div>
      <div className={styles['CharacterCard-content-container']}>
        <p className={styles['CharacterCard-content']}>
          <strong>{characterData.name}</strong>
        </p>
        <p className={styles['CharacterCard-content']}>
          {capitaliseFirstChar(characterData.category)}
        </p>
        <p className={styles['CharacterCard-content']}>{characterData.description}</p>
      </div>
    </div>
  );
}
