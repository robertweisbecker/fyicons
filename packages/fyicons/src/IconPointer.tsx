import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPointer = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPointer(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="pointer"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.083 9.083 7.22 13.182c-.376.827-1.571.764-1.859-.098L2.132 3.397a1 1 0 0 1 1.265-1.265l9.687 3.23c.862.287.925 1.482.098 1.858z" />{props.children}</SvgRoot>;
});
export default IconPointer;
