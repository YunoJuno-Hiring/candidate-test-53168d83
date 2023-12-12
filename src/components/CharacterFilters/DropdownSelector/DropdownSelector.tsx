// DropdownSelector.tsx
import { useFilterContext } from '@contexts/FilterContext';
import React from 'react';
import { capitaliseFirstCharacters } from '@utils/stringHelpers';
import { TContextValue } from '@custom-types/contexts';
import styles from './DropdownSelector.module.scss';

interface DropdownSelectorProps {
  selectOptions: string[];
  contextValue: TContextValue;
  label?: string;
}
export default function DropdownSelector({
  selectOptions,
  contextValue,
  label
}: DropdownSelectorProps) {
  const { selectedValues, setSelectedValues } = useFilterContext();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValues({ ...selectedValues, [contextValue]: event.target.value });
  };

  return (
    <div className={styles['DropdownSelector-container']}>
      <p className={styles['DropdownSelector-label']}>{label}</p>
      <select
        className={styles['DropdownSelector']}
        value={selectedValues[contextValue]}
        onChange={handleChange}
      >
        {selectOptions.map((option: string, key: number) => (
          <option value={option} key={key}>
            {capitaliseFirstCharacters(option)}
          </option>
        ))}
      </select>
    </div>
  );
}
