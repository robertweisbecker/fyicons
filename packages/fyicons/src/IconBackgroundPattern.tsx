import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBackgroundPattern = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBackgroundPattern(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="background-pattern"><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2.5} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9.5 4.5 1.75-1.75M12.5 4.5l1 1m-2 4 1.75 1.75M11.5 12.5l-1 1m-4-2-1.75 1.75M3.5 11.5l-1-1m2-4L2.75 4.75M4.5 3.5l1-1m1 2 2 2m-1 3 2 2m0-3 2-2m-5 1-2 2" />{props.children}</SvgRoot>;
});
export default IconBackgroundPattern;
