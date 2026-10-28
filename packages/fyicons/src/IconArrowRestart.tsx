import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowRestart = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRestart(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-restart"><path fill="currentColor" d="M7.16.275A.5.5 0 0 1 8 .642V2a6.001 6.001 0 0 1 4.054 10.423A6.001 6.001 0 0 1 2.023 7.476a.5.5 0 0 1 .997.087 5 5 0 0 0 2.769 4.92A5.001 5.001 0 1 0 8 3v-.001 1.359a.5.5 0 0 1-.84.368L5.149 2.868a.5.5 0 0 1 0-.735z" /></SvgRoot>;
});
export default IconArrowRestart;
