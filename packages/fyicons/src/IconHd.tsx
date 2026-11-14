import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconHd = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconHd(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="hd"><path fill="currentColor" d="M13 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM3 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm3.58 1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V8.758H4V10.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0v2.258h2.08V5.5a.5.5 0 0 1 .5-.5m3.97.007c1.51.035 2.371 1.477 2.37 3.118-.001 1.431-.952 2.83-2.37 2.867-.33.009-.784.01-1.15.007l-.466-.004-.14-.002h-.051a.5.5 0 0 1-.493-.5V5.506a.5.5 0 0 1 .493-.5h.014l.038-.001.139-.001L9.399 5c.367-.002.82-.002 1.15.006m-1.3.995v3.995l.155.002c.366.002.807.002 1.12-.006.689-.018 1.394-.772 1.395-1.869l-.008-.254c-.077-1.229-.72-1.847-1.386-1.863A44 44 0 0 0 9.406 6z" /></SvgRoot>;
});
export default IconHd;
