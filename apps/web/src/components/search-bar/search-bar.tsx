'use client';
import { Autocomplete, AutocompleteItem, Popover, PopoverTrigger, PopoverContent, Button } from '@nextui-org/react';
import { MaxContainer } from '@/components/max-container/max-container';
import { Search } from '@/icons/search';
import { LocationPopover } from '@/components/search-bar/location-popover';
import { Filters } from '@/icons/filters';
import { useState } from 'react';
import { FiltersModal } from '@/components/filters-modal/filters-modal';

const animals = [
  { label: 'Panie', value: 'cat' },
  { label: 'Panowie', value: 'dog' },
  { label: 'Pary', value: 'elephant' },
  { label: 'Masaż', value: 'lion' },
  { label: 'BDSM', value: 'tiger' },
];

const SearchBar = () => {
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  return (
    <MaxContainer>
      <div className="flex justify-center items-center w-full flex-wrap md:flex-nowrap gap-4">
        <Popover placement="bottom-start">
          <PopoverTrigger>
            <Button disableRipple className="bg-default-100 h-[56px]">
              <div className="flex flex-col items-start">
                <span className="text-xs text-default-600">Lokalizacja</span>
                <span className=" text-foreground-500">Wybierz lokalizację</span>
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <LocationPopover />
          </PopoverContent>
        </Popover>
        <Autocomplete
          selectorIcon={null}
          label="Kategoria"
          placeholder="Wybierz kategorię"
          classNames={{
            base: 'max-w-xs cursor-pointer',
            selectorButton: 'hidden',
          }}
          defaultItems={animals}
        >
          {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>
        <Button color="primary" className="h-[56px]">
          <Search /> Szukaj
        </Button>

        <Button variant="ghost" onClick={() => setIsFiltersModalOpen(!isFiltersModalOpen)}>
          <Filters /> Filtry
        </Button>
      </div>
      <FiltersModal isOpen={isFiltersModalOpen} onOpenChange={setIsFiltersModalOpen} />
    </MaxContainer>
  );
};

export default SearchBar;
