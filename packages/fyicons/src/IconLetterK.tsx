import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterK = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterK(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-k"><rect width={11} height={11} x={2.5} y={2.5} stroke="currentColor" rx={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 5.5v5" /><path fill="currentColor" d="M9.596 10.794a.5.5 0 0 0 .808-.588L10 10.5zM8.404 7.456l-.294-.404-.808.588.294.404L8 7.75zM10 10.5l.404-.294-2-2.75L8 7.75l-.404.294 2 2.75z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6.5 9 3.25-3.5" /></SvgRoot>;
});
export default IconLetterK;
