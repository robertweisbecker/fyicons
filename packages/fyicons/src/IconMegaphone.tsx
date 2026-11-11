import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMegaphone = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMegaphone(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="megaphone"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 12.5a3 3 0 0 1-.972-.165L2 9s-.5-.5-.5-1.5S2 6 2 6l9.515-2.379c.322-.08.653-.121.985-.121m-4 8v.971a1 1 0 0 1-1.4.916l-2-.875a1 1 0 0 1-.6-.916V10.25" /><ellipse cx={12.5} cy={8} stroke="currentColor" rx={2} ry={4.5} /></SvgRoot>;
});
export default IconMegaphone;
