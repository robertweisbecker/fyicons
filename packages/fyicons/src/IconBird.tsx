import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBird = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBird(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" d="M7.5 5a2.51 2.51 0 0 0-2.513-2.5A2.486 2.486 0 0 0 2.5 4.975v.082c0 .604.24 1.183.667 1.61.213.213.333.503.333.804v.301A3.73 3.73 0 0 0 7.228 11.5H10.5l2.414.805a1 1 0 0 0 1.023-.242l.563-.563-2.75-1.75" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.095 5.83 13.5 9.5H8.72c-.781 0-1.53-.31-2.082-.862L6.58 8.58a1.866 1.866 0 0 1 2.515-2.75M1.25 4.5H2.5v1zm7.25 8.75 1-1.75m-3 0v1l-1 1" /><path stroke="currentColor" strokeLinecap="round" d="M10.5 13.5a3.82 3.82 0 0 0-2.914.207L7 14m-1.5-.5h-1" /><circle cx={4.5} cy={4.5} r={0.5} fill="currentColor" /></SvgRoot>;
});
export default IconBird;
