import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBlueprint = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBlueprint(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M4.5 10a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-2-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m-2-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m4 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1" /><path stroke="currentColor" strokeLinecap="square" d="M12.5 3.5a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1" /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="m7.793 14.793-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414l-5.586 5.586a1 1 0 0 1-1.414 0ZM11 7l1.25 1.25M9 9l1.25 1.25M7 11l1.25 1.25" /></SvgRoot>;
});
export default IconBlueprint;
