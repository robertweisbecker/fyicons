import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBlueprintGrid = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBlueprintGrid(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="blueprint-grid"><path d="M7.29289 14.2929L5.70711 12.7071C5.31658 12.3166 5.31658 11.6834 5.70711 11.2929L11.2929 5.70711C11.6834 5.31658 12.3166 5.31658 12.7071 5.70711L14.2929 7.29289C14.6834 7.68342 14.6834 8.31658 14.2929 8.70711L8.70711 14.2929C8.31658 14.6834 7.68342 14.6834 7.29289 14.2929Z" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" /><path d="M10.5 6.5L11.75 7.75" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" /><path d="M8.5 8.5L9.75 9.75" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" /><path d="M6.5 10.5L7.75 11.75" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" /><rect x={3} y={2} width={1} height={9} rx={0.5} fill="currentColor" /><rect x={2} y={3} width={9} height={1} rx={0.5} fill="currentColor" /><rect x={2} y={7} width={4} height={1} rx={0.5} fill="currentColor" /><rect x={7} y={2} width={1} height={4} rx={0.5} fill="currentColor" /></SvgRoot>;
});
export default IconBlueprintGrid;
