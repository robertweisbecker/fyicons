import { catalogMetadata, type IconRecord } from '@/lib/catalog';
import { resolveIconSources } from '@/lib/icon-source';
import { createIconArchive } from '@/lib/icon-archive';
import readme from '@/data/README.txt?raw';
import license from '../../../../LICENSE?raw';

export async function createSelectedArchive(selection: IconRecord[]) {
  const resolved = await resolveIconSources(selection);
  return createIconArchive(resolved, catalogMetadata, readme, license);
}
