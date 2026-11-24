import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArchive = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArchive(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="archive"><path fill="currentColor" d="M10 7H6a2 2 0 1 0 4 0" /><path stroke="currentColor" d="M5 13.5h6a2.5 2.5 0 0 0 2.5-2.5V6a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v5A2.5 2.5 0 0 0 5 13.5Z" /><rect width={13} height={3} x={1.5} y={2.5} stroke="currentColor" rx={1} />{props.children}</SvgRoot>;
});
export default IconArchive;
