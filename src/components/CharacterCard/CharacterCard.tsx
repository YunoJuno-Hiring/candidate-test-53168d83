import { Character } from '@custom-types/character';
import React from 'react';

type CharacterProps = {
  characterData: Character;
};

export default function CharacterCard({ characterData }: CharacterProps) {
  return <div>{characterData.name}</div>;
}
