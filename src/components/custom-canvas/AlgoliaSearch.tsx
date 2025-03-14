'use client';

import { FC } from 'react';
import React from 'react';
import { Hit as AlgoliaHit } from 'instantsearch.js';
import { Hits, Highlight, SearchBox, RefinementList, DynamicWidgets } from 'react-instantsearch';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import { ComponentProps } from '@uniformdev/canvas-next-rsc/component';
import { client } from '@/utils/client';

// Here, you can add parameters to be used on the canvas side.
export type AlgoliaSearchParameters = {
  displayName?: string;
};

type AlgoliaSearchProps = ComponentProps<AlgoliaSearchParameters>;

type HitProps = {
  hit: AlgoliaHit<{
    name: string;
    price: number;
  }>;
};

function Hit({ hit }: HitProps) {
  return (
    <>
      <Highlight hit={hit} attribute="name" />
      <span className="Hit-price">${hit.price}</span>
    </>
  );
}

function FallbackComponent({ attribute }: { attribute: string }) {
  return (
    <div>
      <RefinementList attribute={attribute} />
    </div>
  );
}

const AlgoliaSearch: FC<AlgoliaSearchProps> = () => (
  // Your implementation of the component logic
  <div>
    <InstantSearchNext searchClient={client} indexName="UniformDev" routing>
      <div className="Container">
        <div>
          <DynamicWidgets fallbackComponent={FallbackComponent} />
        </div>
        <div>
          <SearchBox />
          <Hits hitComponent={Hit} />
        </div>
      </div>
    </InstantSearchNext>
  </div>
);

export default AlgoliaSearch;
