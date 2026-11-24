import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowsRotateLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsRotateLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrows-rotate-lg"><path fill="currentColor" d="M14.431 6.943a.5.5 0 0 1 .541.455 7 7 0 0 1-4.325 7.081 7 7 0 0 1-4.355.31 7 7 0 0 1-2.986-1.597l-.743.744A.33.33 0 0 1 2 13.704V11.33a.33.33 0 0 1 .33-.33h2.373a.33.33 0 0 1 .233.563l-.922.92a6 6 0 0 0 6.255 1.07 6 6 0 0 0 3.707-6.07.5.5 0 0 1 .455-.54M5.334 1.529a7 7 0 0 1 7.358 1.277l.744-.743a.33.33 0 0 1 .563.233V4.67a.33.33 0 0 1-.33.33h-2.374a.33.33 0 0 1-.233-.563l.922-.923A6 6 0 0 0 2.02 8.49a.5.5 0 0 1-.996.082 7 7 0 0 1 4.309-7.043" />{props.children}</SvgRoot>;
});
export default IconArrowsRotateLg;
