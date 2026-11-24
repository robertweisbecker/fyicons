import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArchiveOpen = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArchiveOpen(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="archive-open"><path fill="currentColor" d="M9.999 7h-4a2 2 0 1 0 4 0" /><path stroke="currentColor" strokeLinecap="round" d="M2.5 7.5V11A2.5 2.5 0 0 0 5 13.5h6a2.5 2.5 0 0 0 2.5-2.5V6.5a1 1 0 0 0-1-1H5.75" /><rect width={10.856} height={2.66} x={0.134} y={5.562} stroke="currentColor" rx={1} transform="rotate(-30 .134 5.562)" />{props.children}</SvgRoot>;
});
export default IconArchiveOpen;
