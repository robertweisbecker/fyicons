import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconComments = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconComments(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="comments"><path fill="currentColor" d="M10 1a5 5 0 0 1 5 5v4a1 1 0 0 1-1 1h-4l-.03-.001A4.5 4.5 0 0 1 5.5 15H2a1 1 0 0 1-1-1v-3.5a4.5 4.5 0 0 1 4-4.472V6a5 5 0 0 1 5-5M5.104 7.022A3.5 3.5 0 0 0 2 10.5V14h3.5a3.5 3.5 0 0 0 3.477-3.105 5.01 5.01 0 0 1-3.873-3.873M10 2a4 4 0 1 0 0 8h4V6a4 4 0 0 0-4-4" />{props.children}</SvgRoot>;
});
export default IconComments;
