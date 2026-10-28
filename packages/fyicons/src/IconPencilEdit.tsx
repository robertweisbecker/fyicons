import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPencilEdit = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPencilEdit(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pencil-edit"><path fill="currentColor" d="M6.5 2a.5.5 0 1 1 0 1H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9.5a.5.5 0 0 1 1 0V11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm4.647.147a1.914 1.914 0 1 1 2.707 2.707L9.77 8.937c-.33.329-.73.577-1.172.725l-1.966.655a.75.75 0 0 1-.95-.95l.656-1.965c.147-.442.395-.843.724-1.172zm2 .707a.914.914 0 0 0-1.293 0L7.77 6.937a2 2 0 0 0-.483.781L6.791 9.21l1.491-.497a2 2 0 0 0 .781-.482l4.083-4.083a.915.915 0 0 0 0-1.293" /></SvgRoot>;
});
export default IconPencilEdit;
