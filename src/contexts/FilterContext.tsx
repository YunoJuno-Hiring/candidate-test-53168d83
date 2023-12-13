import { IFilterContext } from '@custom-types/contexts';
import React, { ReactNode, createContext, useContext } from 'react';

interface FilterContextProps {
  selectedValues: IFilterContext;
  setSelectedValues: React.Dispatch<React.SetStateAction<IFilterContext>>;
  children?: ReactNode;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export default function FilterContextProvider({ children }: { children: ReactNode }) {
  const [selectedValues, setSelectedValues] = React.useState<IFilterContext>({
    category: 'all',
    orderBy: 'alphabetical'
  });

  return (
    <FilterContext.Provider value={{ selectedValues, setSelectedValues }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within a FilterContextProvider');
  }
  return context;
};
