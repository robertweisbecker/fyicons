import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCash = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCash(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cash"><path fill="currentColor" d="M13.5 3A1.5 1.5 0 0 1 15 4.5v5a1.5 1.5 0 0 1-1.5 1.5h-1.35l-.367.96a1.5 1.5 0 0 1-1.91.876L5.067 11.1a.5.5 0 0 1-.163-.1H2.5A1.5 1.5 0 0 1 1 9.5v-5A1.5 1.5 0 0 1 2.5 3zM2 9.5a.5.5 0 0 0 .5.5H3v-.5a.5.5 0 0 0-.5-.5H2zm2-5A1.5 1.5 0 0 1 2.5 6H2v2h.5A1.5 1.5 0 0 1 4 9.5v.5h8v-.5A1.5 1.5 0 0 1 13.5 8h.5V6h-.5A1.5 1.5 0 0 1 12 4.5V4H4zM13.5 9a.5.5 0 0 0-.5.5v.5h.5a.5.5 0 0 0 .5-.5V9zM8 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M2.5 4a.5.5 0 0 0-.5.5V5h.5a.5.5 0 0 0 .5-.5V4zm10.5.5a.5.5 0 0 0 .5.5h.5v-.5a.5.5 0 0 0-.5-.5H13z" /></SvgRoot>;
});
export default IconCash;
