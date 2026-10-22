import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPlayPause = React.forwardRef<SVGSVGElement, IconProps>(function IconPlayPause(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.03995 7.37227L2.66044 4.50875C2.16161 4.18259 1.5 4.54048 1.5 5.13647V10.8635C1.5 11.4595 2.16161 11.8174 2.66044 11.4913L7.03995 8.62773C7.4927 8.3317 7.4927 7.6683 7.03995 7.37227Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><rect x={9.5} y={4.5} width={2} height={7} rx={0.75} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><rect x={13.5} y={4.5} width={2} height={7} rx={0.75} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconPlayPause;
