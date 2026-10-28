import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowReload = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowReload(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-reload"><path fill="currentColor" d="M8.84.275a.5.5 0 0 0-.839.367V2a6 6 0 0 0-5.593 3.825 6.001 6.001 0 0 0 8.246 7.555 6 6 0 0 0 3.324-5.904.5.5 0 0 0-.997.087A5 5 0 1 1 8 3v-.001 1.359a.5.5 0 0 0 .84.367l2.013-1.857a.5.5 0 0 0 0-.736z" /></SvgRoot>;
});
export default IconArrowReload;
