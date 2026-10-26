import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCursorFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCursorFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M1.695 3.604c-.407-1.182.726-2.314 1.908-1.907l9.463 3.263c1.399.483 1.327 2.487-.103 2.868l-1.918.511 2.308 2.308a1.915 1.915 0 0 1-2.707 2.707l-2.31-2.31-.51 1.921c-.383 1.43-2.384 1.5-2.867.103z" /></SvgRoot>;
});
export default IconCursorFill;
