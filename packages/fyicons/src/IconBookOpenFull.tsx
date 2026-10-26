import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBookOpenFull = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBookOpenFull(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M2.39 3.423a4.25 4.25 0 0 1 5.62-.086 4.5 4.5 0 0 1 5.767.24l.059.053c.104.095.164.23.164.37v9.5a.5.5 0 0 1-.832.374l-.314-.279a3.166 3.166 0 0 0-4.208 0l-.314.28a.5.5 0 0 1-.664 0l-.314-.28a3.166 3.166 0 0 0-4.208 0l-.314.28A.501.501 0 0 1 2 13.5V4c0-.14.06-.275.164-.37zm5.047.74a3.25 3.25 0 0 0-4.374 0L3 4.221v8.233a4.17 4.17 0 0 1 4.5 0V4.221zM13 4.225a3.5 3.5 0 0 0-4.5 0v8.23a4.17 4.17 0 0 1 4.5 0z" /></SvgRoot>;
});
export default IconBookOpenFull;
