import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconEarth = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconEarth(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2" /><path fill="currentColor" d="M10.526 9.475a1 1 0 0 1 1-.975H14V10l-2 3 .287-1.434a.89.89 0 0 0-.874-1.066.89.89 0 0 1-.89-.913zM5.224 6.947a1 1 0 0 0 .894.553H7.5l.74 1.48a1 1 0 0 1-.062 1.003L6.5 12.5l-.25-3c-1.17.202-2.054-1.038-1.482-2.079L5 7 3.17 5.261a1 1 0 0 1-.089-1.354l.269-.332 2-1.2L7.5 1.75 7 3l.5 1.5-.658-.33a1.5 1.5 0 0 0-2.013.672l-.105.21a1 1 0 0 0 0 .895zM12.5 3.575 10.5 2l1 1.5-1 2 2 1V8l1.25-2.644z" /><path stroke="currentColor" strokeLinejoin="round" d="M10.526 9.475a1 1 0 0 1 1-.975H14V10l-2 3 .287-1.434a.89.89 0 0 0-.874-1.066.89.89 0 0 1-.89-.913zM5.224 6.947a1 1 0 0 0 .894.553H7.5l.74 1.48a1 1 0 0 1-.062 1.003L6.5 12.5l-.25-3c-1.17.202-2.054-1.038-1.482-2.079L5 7 3.17 5.261a1 1 0 0 1-.089-1.354l.269-.332 2-1.2L7.5 1.75 7 3l.5 1.5-.658-.33a1.5 1.5 0 0 0-2.013.672l-.105.21a1 1 0 0 0 0 .895zM12.5 3.575 10.5 2l1 1.5-1 2 2 1V8l1.25-2.644z" /></SvgRoot>;
});
export default IconEarth;
