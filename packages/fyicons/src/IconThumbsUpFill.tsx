import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconThumbsUpFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconThumbsUpFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="thumbs-up-fill"><path fill="currentColor" d="M8.703 3.986c.305-.806.256-2.16 1.196-1.973 1.471.238 1.198 2.945.987 3.986h1.497c.868 0 1.57.704 1.571 1.571 0 .293-.068.568-.184.816a1.74 1.74 0 0 1-.332 2.142q.015.108.016.221c0 .507-.219.96-.561 1.277q.015.11.016.223a1.75 1.75 0 0 1-1.75 1.75h-.409V14h-.287l-.04-.001h-.036a5 5 0 0 1-1.782-.356l-.967-.388a2.2 2.2 0 0 1-1.019-.826l-.13-.195A2.9 2.9 0 0 1 6 10.617L5.999 8.53c0-.516.03-1.076.38-1.456.348-.377 1.146-1.118 1.732-1.824.297-.358.454-.944.592-1.264M5 10.751c0 .811.263 1.601.75 2.25h-1.6c-.43 0-.872-.058-1.208-.327-.426-.343-.942-1-.942-2.173s.516-1.83.942-2.173c.336-.27.777-.327 1.207-.327H5z" /></SvgRoot>;
});
export default IconThumbsUpFill;
