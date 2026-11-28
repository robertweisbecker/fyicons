import { byId, byName } from '../lib/catalog';
import { iconBySourceId } from '../icons/registry';
import { createIconRenderer } from './createIconLookup';

/** Catalog lookup wrapper. Use named exports from fyicons for static imports. */
export const CatalogIcon = createIconRenderer((name) => {
  const item = byId.get(name) ?? byName.get(name);
  if (!item) throw new Error('Unknown FYIcon: ' + name);
  const Component = iconBySourceId[item.id];
  if (!Component) throw new Error('Missing generated FYIcon: ' + item.id);
  return { Component, sourceId: item.id };
});
