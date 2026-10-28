import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLoader = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLoader(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="loader"><path stroke="currentColor" strokeLinecap="round" d="M8 3a5 5 0 1 1-3.536 8.536" /><path stroke="currentColor" d="M8 3a5 5 0 1 1 0 10A5 5 0 0 1 8 3Z" opacity={0.25} /></SvgRoot>;
});
export default IconLoader;
