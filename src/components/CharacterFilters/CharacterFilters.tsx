import React from 'react';
import styles from './CharacterFilters.module.scss';
import DropdownSelector from './DropdownSelector/DropdownSelector';
import { characterCategoryStrings, orderByStrings } from '@constants/strings';

export default function CharacterFilters() {
  const characterCategoryArray: string[] = Object.values(characterCategoryStrings);
  const characterOrderByArray: string[] = Object.values(orderByStrings);

  return (
    <div className={styles['CharacterFilters-container']}>
      <div className={styles['CharacterFilters-filter']}>
        <DropdownSelector
          label="Category"
          selectOptions={['all', ...characterCategoryArray]}
          contextValue="category"
        />
      </div>
      <div className={styles['CharacterFilters-filter']}>
        <DropdownSelector
          label="Order by"
          selectOptions={characterOrderByArray}
          contextValue="orderBy"
        />
      </div>
    </div>
  );
}
