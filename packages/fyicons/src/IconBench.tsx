import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBench = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBench(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="bench"><path stroke="currentColor" strokeLinejoin="round" d="M1.5 9.5h13v1a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z" /><path stroke="currentColor" d="M3 5.5h10a.5.5 0 0 0 .5-.5v-.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1V5a.5.5 0 0 0 .5.5Zm0 2h10a.5.5 0 0 0 .5-.5v-.5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1V7a.5.5 0 0 0 .5.5Z" /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="M11.5 7.5v2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 11.5v2" /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="M4.5 7.5v2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 11.5v2" />{props.children}</SvgRoot>;
});
export default IconBench;
