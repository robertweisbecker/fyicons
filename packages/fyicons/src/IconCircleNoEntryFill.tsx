import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCircleNoEntryFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCircleNoEntryFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="circle-no-entry-fill"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M4 9.5h8v-3H4z" />{props.children}</SvgRoot>;
});
export default IconCircleNoEntryFill;
