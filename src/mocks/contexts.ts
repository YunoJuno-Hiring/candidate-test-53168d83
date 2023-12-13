import { IFilterContext } from '@custom-types/contexts';

export function generateMockFilterContext(overrides?: Partial<IFilterContext>): IFilterContext {
  const defaultContext = {
    category: 'all',
    orderBy: 'significance'
  };

  return { ...defaultContext, ...overrides } as IFilterContext;
}
