import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconGlassesSimple = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconGlassesSimple(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="glasses-simple"><path stroke="currentColor" d="M3.5 11.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /><path stroke="currentColor" strokeLinecap="round" d="M6.5 8.5V8a1.5 1.5 0 1 1 3 0v.5" />{props.children}</SvgRoot>;
});
export default IconGlassesSimple;
