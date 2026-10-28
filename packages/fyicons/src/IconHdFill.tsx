import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHdFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHdFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hd-fill"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9.425 5.191l-.133.002h-.049a.563.563 0 0 0-.556.563v4.487c0 .308.248.558.555.563h.049l.133.002c.112 0 .27.003.445.004.35.001.783.001 1.1-.006 1.388-.034 2.344-1.336 2.345-2.694 0-1.537-.86-2.886-2.346-2.919a45 45 0 0 0-1.099-.005zM6.5 5.243a.5.5 0 0 0-.5.5v1.975H4V5.743a.5.5 0 0 0-1 0v4.5a.5.5 0 0 0 1 0V8.718h2v1.525a.5.5 0 0 0 1 0v-4.5a.5.5 0 0 0-.5-.5m4.443 1.075c.634.015 1.246.596 1.245 1.793 0 .919-.626 1.555-1.247 1.57a40 40 0 0 1-1.066.006l-.062-.001V6.313h.062c.35-.001.77-.001 1.068.005" /></SvgRoot>;
});
export default IconHdFill;
