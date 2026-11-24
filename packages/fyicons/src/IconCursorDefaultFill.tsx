import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCursorDefaultFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCursorDefaultFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="cursor-default-fill"><path fill="currentColor" stroke="currentColor" strokeLinejoin="round" d="M4.5 12.5v-11l8.25 7-3.25 1 1.954 3.584a.33.33 0 0 1-.129.446l-1.647.923a.33.33 0 0 1-.455-.136L7.25 10.5z" />{props.children}</SvgRoot>;
});
export default IconCursorDefaultFill;
