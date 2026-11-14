import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMobility = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMobility(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="mobility"><circle cx={11.5} cy={2.5} r={1.5} fill="currentColor" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3.5 5.5 1.71-.855a1 1 0 0 1 .61-.092l5.68.947" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9.5 8.5 2-3H8.809a.5.5 0 0 0-.447.276l-1.5 3a.5.5 0 0 0 .447.724H13l.32-.638a.25.25 0 0 0-.225-.362z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 9.5v.597a4.403 4.403 0 0 0 8.418 1.807L13 9.5" />{props.children}</SvgRoot>;
});
export default IconMobility;
