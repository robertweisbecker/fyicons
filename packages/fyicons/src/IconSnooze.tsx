import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSnooze = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSnooze(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="snooze"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 8.5h5l-5 5h5m2-7.25h4l-4 4h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.88} d="M4.5 2.5h3l-3 3h3" />{props.children}</SvgRoot>;
});
export default IconSnooze;
