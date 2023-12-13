import { ICharacter } from './character';

export interface UseFetchCharactersResponse {
  loading: boolean;
  characterList: ICharacter[];
}
