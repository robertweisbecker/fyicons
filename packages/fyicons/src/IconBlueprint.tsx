import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBlueprint = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBlueprint(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="blueprint"><path fill="currentColor" d="M4.5 10a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-2-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-2-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m4 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1" /><path stroke="currentColor" strokeLinecap="square" d="M12.5 3.5a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1" /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="m8.116 15.116-1.232-1.232a1.25 1.25 0 0 1 0-1.768l5.232-5.232a1.25 1.25 0 0 1 1.768 0l1.232 1.232a1.25 1.25 0 0 1 0 1.768l-5.232 5.232a1.25 1.25 0 0 1-1.768 0ZM11.5 7.5l1.25 1.25M9.5 9.5l1.25 1.25m-3.25.75 1.25 1.25" />{props.children}</SvgRoot>;
});
export default IconBlueprint;
