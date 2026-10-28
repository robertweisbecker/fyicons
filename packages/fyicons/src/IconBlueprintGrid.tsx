import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBlueprintGrid = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBlueprintGrid(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="blueprint-grid"><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="m7.293 14.293-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414l-5.586 5.586a1 1 0 0 1-1.414 0ZM10.5 6.5l1.25 1.25M8.5 8.5l1.25 1.25m-3.25.75 1.25 1.25" /><rect width={1} height={9} x={3} y={2} fill="currentColor" rx={0.5} /><rect width={9} height={1} x={2} y={3} fill="currentColor" rx={0.5} /><rect width={4} height={1} x={2} y={7} fill="currentColor" rx={0.5} /><rect width={1} height={4} x={7} y={2} fill="currentColor" rx={0.5} /></SvgRoot>;
});
export default IconBlueprintGrid;
