import type { Filter } from './filters-types';

import { FilterTypeEnum } from './filters-types';

const bookingItems: Filter[] = [
  {
    type: FilterTypeEnum.Tabs,
    title: 'Type of place',
    description: 'Search rooms, entire homes, or any type of place',
    options: [
      {
        title: 'Any Type',
        value: 'any_type',
      },
      {
        title: 'Room',
        value: 'room',
      },
      {
        title: 'Entire Place',
        value: 'entire_place',
      },
    ],
  },
  {
    title: 'Price Range',
    description: 'Total prices for 5 nights including fees and taxes',
    type: FilterTypeEnum.PriceRange,
    range: {
      min: 0,
      defaultValue: [100, 500],
      max: 2000,
      step: 1,
    },
  },
  {
    title: 'Property Rating',
    description: 'Includes Acme House listings',
    type: FilterTypeEnum.Rating,
  },
  {
    title: 'Amenities',
    description: 'Select as many as you want',
    type: FilterTypeEnum.TagGroup,
    options: [
      {
        title: 'Wifi',
        value: 'wifi',
        icon: 'solar:home-wifi-angle-bold',
      },
      {
        title: 'Kitchen',
        value: 'kitchen',
        icon: 'solar:fridge-bold',
      },
      {
        title: 'Washer',
        value: 'washer',
        icon: 'solar:washing-machine-bold',
      },
      {
        title: 'Dryer',
        value: 'dryer',
        icon: 'solar:washing-machine-minimalistic-bold',
      },
      {
        title: 'TV',
        value: 'tv',
        icon: 'solar:tv-bold',
      },
      {
        title: 'Free Parking',
        value: 'free_parking',
        icon: 'solar:wheel-bold',
      },
      {
        title: 'Pool',
        value: 'pool',
        icon: 'solar:swimming-bold',
      },
      {
        title: 'Gym',
        value: 'gym',
        icon: 'solar:treadmill-bold',
      },
      {
        title: 'Spa',
        value: 'spa',
        icon: 'solar:bath-bold',
      },
      {
        title: 'Beachfront',
        value: 'beachfront',
        icon: 'solar:sun-bold',
      },
      {
        title: 'Pet Friendly',
        value: 'pet_friendly',
        icon: 'solar:cat-bold',
      },
    ],
  },
  {
    title: 'Opcje dodatkowe',
    description: 'Customize your stay',
    type: FilterTypeEnum.Toggle,
    options: [
      {
        title: 'Pracuje teraz',
        description: 'Jest aktualnie dostępna',
        value: 'instant_book',
      },
      {
        title: 'Zweryfikowane',
        description: 'Stay with recognized hosts and enjoy a 5-star stay',
        value: 'superhost',
      },
      {
        title: 'Nowe',
        description: 'Cancel before 4:00 PM on 10/15 and get a full refund, minus the first night and service fee',
        value: 'free_cancellation',
      },
    ],
  },
];

export default bookingItems;
