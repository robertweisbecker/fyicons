import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArchiveFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArchiveFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="archive-fill"><path fill="currentColor" d="M14 11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6h12zM6 7a2 2 0 1 0 4 0z" /><rect width={13} height={2} x={1.5} y={2.5} fill="currentColor" stroke="currentColor" rx={0.5} />{props.children}</SvgRoot>;
});
export default IconArchiveFill;
