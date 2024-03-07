import PlaceListItem from '@/components/offer-card/offer-card';
import { cn } from '@/utils/cn';
import { MaxContainer } from '@/components/max-container/max-container';
import SearchBar from '@/components/search-bar/search-bar';
import { Button } from '@nextui-org/react';
import places from '@/mocks/offers';
import { onUpvoteAction } from './_on-upvote-action';

export default function Home() {
  return (
    <main>
      <MaxContainer>
        <SearchBar />
        <form action={onUpvoteAction}>
          <Button type="submit">test</Button>
        </form>

        <div
          className={cn('my-auto grid max-w-7xl grid-cols-1 gap-5 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-4')}
        >
          {places.map((place) => (
            <PlaceListItem key={place.id} {...place} />
          ))}
        </div>
      </MaxContainer>
    </main>
  );
}
