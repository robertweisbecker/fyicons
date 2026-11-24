import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBox = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBox(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="box"><path stroke="currentColor" strokeLinejoin="round" d="M2.5 5.606v4.788c0 .53.28 1.022.737 1.291l4 2.364a1.5 1.5 0 0 0 1.526 0l4-2.364a1.5 1.5 0 0 0 .737-1.291V5.606a1.5 1.5 0 0 0-.737-1.291l-4-2.364a1.5 1.5 0 0 0-1.526 0l-4 2.364a1.5 1.5 0 0 0-.737 1.29Z" /><path stroke="currentColor" strokeLinecap="round" d="M13 5 8 7.75 3 5m5.5 2.5v6.26" /><path stroke="currentColor" strokeLinecap="square" d="M7.5 2.5v4.26" /><path stroke="currentColor" strokeLinecap="round" d="m5.5 9.25-1-.5" />{props.children}</SvgRoot>;
});
export default IconBox;
