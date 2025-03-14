import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { createMemoryCache } from '@algolia/client-common';

export const responsesCache = createMemoryCache();
export const client = algoliasearch('4B8AES9W4R', 'a0e65aa12c2d61be92e75bcb272323f7', {
  responsesCache,
});
