import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCursorDefault = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCursorDefault(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cursor-default"><path stroke="currentColor" strokeLinejoin="round" d="M4.5 1.5v11l2.75-2 1.973 3.817a.33.33 0 0 0 .455.136l1.647-.923a.33.33 0 0 0 .129-.446L9.5 9.5l3.25-1z" />{props.children}</SvgRoot>;
});
export default IconCursorDefault;
