import { Character } from '@custom-types/character';
import { UseFetchCharactersProps } from '@custom-types/hooks';
import { useState, useEffect } from 'react';

export const useFetchCharacters = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [characterList, setCharacterList] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setCharacterList(data);
            setLoading(false);
          });
      } catch (error) {
        console.log('Error fetching data: ', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return <UseFetchCharactersProps>{ loading, characterList };
};
