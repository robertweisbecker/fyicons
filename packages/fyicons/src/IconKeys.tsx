import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconKeys = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconKeys(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M9 1a4 4 0 0 1 2 7.463v.83a1 1 0 0 1-.293.707l-.5.5.293.293a1 1 0 0 1 0 1.414L9.207 13.5a1 1 0 0 1-1.177.176l-.823.824a1 1 0 0 1-1.414 0l-.5-.5A1 1 0 0 1 5 13.293V9.5q0-.02.003-.037a4 4 0 0 1-.73-.536 4.003 4.003 0 0 1-.384-5.44 4 4 0 0 1 2.393-1.422A4 4 0 0 1 9 1M5.273 3.547A3 3 0 0 0 6 8.825v4.468l.5.5.793-.793A1 1 0 0 1 7 12.293v-3.83a4 4 0 0 1-1.727-4.916M9 2a3 3 0 0 0-1.285 5.712.5.5 0 0 1 .285.451v4.13l.5.5L9.793 11.5l-.293-.293a1 1 0 0 1 0-1.414l.5-.5v-1.13a.5.5 0 0 1 .285-.451A3.001 3.001 0 0 0 9 2m0 1.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" /></SvgRoot>;
});
export default IconKeys;
