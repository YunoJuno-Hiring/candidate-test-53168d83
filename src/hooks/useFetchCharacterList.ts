import { useFilterContext } from '@contexts/FilterContext';
import { ICharacter } from '@custom-types/character';
import { UseFetchCharactersResponse } from '@custom-types/hooks';
import { useState, useEffect } from 'react';
import { handleFilters } from '@utils/filterHelpers';

export const useFetchCharacterList = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [characterList, setCharacterList] = useState<ICharacter[]>([]);
  const { selectedValues } = useFilterContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setCharacterList(handleFilters(data, selectedValues));
            setLoading(false);
          });
      } catch (error) {
        console.log('Error fetching data: ', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, selectedValues]);

  return <UseFetchCharactersResponse>{ loading, characterList };
};
