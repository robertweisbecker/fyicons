import { catalogMetadata, type IconRecord } from './catalog';
import { resolveIconSources } from './icon-source';
import { createIconArchive } from './icon-archive';
import readme from '@/data/README.txt?raw';
import license from '../../../../LICENSE?raw';

export async function createSelectedArchive(selection: IconRecord[]) {
  const resolved = await resolveIconSources(selection);
  return createIconArchive(resolved, catalogMetadata, readme, license);
}
