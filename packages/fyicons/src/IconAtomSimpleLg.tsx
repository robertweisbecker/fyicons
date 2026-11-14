import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconAtomSimpleLg = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconAtomSimpleLg(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="atom-simple-lg"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 2.5c2 2 .296 5.704-2.5 8.5s-6.5 4.5-8.5 2.5S2.204 7.796 5 5s6.5-4.5 8.5-2.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 2.5c-2 2-.297 5.704 2.5 8.5 2.795 2.796 6.499 4.5 8.5 2.5 2-2 .295-5.704-2.5-8.5C8.202 2.204 4.5.5 2.5 2.5" /><path fill="currentColor" d="M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />{props.children}</SvgRoot>;
});
export default IconAtomSimpleLg;
