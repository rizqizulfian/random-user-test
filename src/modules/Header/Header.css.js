import { classNamesToString } from '../../utils/utils';

export const container = 'flex flex-row space-x-5';
export const subContainer = 'flex-none w-64';
export const labels = 'block mb-1';

export const wrapperSearchInput = 'mt-1 relative shadow-sm';

export const inputSearch = classNamesToString(
  [
    'block',
    'w-full',
    'border-gray-300',
    'rounded',
    'sm:text-sm',
    'focus:ring',
    'focus:border-indigo-300',
    'focus:ring-indigo-200',
    'focus:ring-opacity-50'
  ]
);

export const inputSearchWrapperIcon = 'absolute inset-y-0 right-0 flex items-center';

export const inputSearchWrapperIconButton = classNamesToString(
  [
    'btn',
    'inline-block',
    'px-6',
    'py-2.5',
    'bg-blue-500',
    'text-white',
    'font-medium',
    'text-xs',
    'leading-tight',
    'uppercase',
    'shadow-md',
    'hover:bg-blue-600',
    'hover:shadow-lg',
    'focus:shadow-lg',
    'focus:outline-none',
    'focus:ring-0',
    'active:bg-indigo-200',
    'active:shadow-lg',
    'transition',
    'duration-150',
    'ease-in-out',
    'flex',
    'items-center'
  ]
);

export const inputGenderSelect = classNamesToString(
  [
    'block',
    'w-full',
    'mt-1',
    'border-gray-300',
    'shadow-sm',
    'rounded',
    'focus:border-indigo-300',
    'focus:ring',
    'focus:ring-indigo-200',
    'focus:ring-opacity-50'
  ]
);

export const resetFilterButtons = classNamesToString(
  [
    'rounded',
    'text-gray-800',
    'font-semi',
    'py-2',
    'px-4',
    'border',
    'border-gray-300',
    'hover:bg-gray-100',
    'hover:border-indigo-300',
    'hover:bg-transparent'
  ]
);
