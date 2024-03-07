import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { useState } from 'react';

const regions = [
  { label: 'Dolnośląskie', value: 'dolnoslaskie' },
  { label: 'Kujawsko-pomorskie', value: 'kujawsko-pomorskie' },
  { label: 'Lubelskie', value: 'lubelskie' },
  { label: 'Lubuskie', value: 'lubuskie' },
  { label: 'Łódzkie', value: 'lodzkie' },
  { label: 'Małopolskie', value: 'malopolskie' },
];

const cities = [
  { label: 'Wrocław', value: 'wroclaw' },
  { label: 'Warszawa', value: 'warszawa' },
  { label: 'Kraków', value: 'krakow' },
  { label: 'Poznań', value: 'poznan' },
  { label: 'Gdańsk', value: 'gdansk' },
  { label: 'Szczecin', value: 'szczecin' },
];

export const LocationPopover = () => {
  const [region, setRegion] = useState<string | number>('');
  const [city, setCity] = useState<string | number>('');

  const onRegionChange = (key: string | number) => {
    if (regions.some((region) => region.value === key)) {
      setRegion(key);
      return;
    }
    setRegion('');
  };

  const onCityChange = (key: string | number) => {
    if (cities.some((city) => city.value === key)) {
      setCity(key);
      return;
    }
    setCity('');
  };

  return (
    <div className="p-4">
      <div className="flex gap-4">
        <Autocomplete
          allowsCustomValue
          label="Województwo"
          placeholder="Wybierz województwo"
          classNames={{
            base: 'max-w-xs cursor-pointer',
            selectorButton: 'hidden',
          }}
          inputValue={regions?.find((r) => r.value === region)?.label}
          defaultItems={regions}
          selectedKey={region}
          onSelectionChange={onRegionChange}
        >
          {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>
        <Autocomplete
          allowsCustomValue
          label="Miasto"
          placeholder="Wybierz miasto"
          inputValue={cities?.find((c) => c.value === city)?.label}
          classNames={{
            base: 'max-w-xs cursor-pointer',
            selectorButton: 'hidden',
          }}
          defaultItems={cities}
        >
          {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>
      </div>
    </div>
  );
};
