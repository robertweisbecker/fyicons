import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFilePlay = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFilePlay(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="file-play"><path fill="currentColor" d="M7.672 1a2.5 2.5 0 0 1 1.767.732l2.829 2.829A2.5 2.5 0 0 1 13 6.328V12.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5V6.75a.75.75 0 0 0-.75-.75H8.5A1.5 1.5 0 0 1 7 4.5V2zm3 2.5a.5.5 0 0 0 .5.5h2.75l.045.002-2.563-2.563A1.5 1.5 0 0 0 8 2.037z" /><path fill="currentColor" d="M6 11.237V7.763a.75.75 0 0 1 1.11-.658l3.183 1.737a.75.75 0 0 1 0 1.316l-3.184 1.737A.75.75 0 0 1 6 11.237" />{props.children}</SvgRoot>;
});
export default IconFilePlay;
