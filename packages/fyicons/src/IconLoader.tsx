import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLoader = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLoader(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="loader"><path stroke="currentColor" strokeLinecap="round" d="M8 2a6 6 0 1 1-4.243 10.243" /><path stroke="currentColor" d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Z" opacity={0.25} />{props.children}</SvgRoot>;
});
export default IconLoader;
