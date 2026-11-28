import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconPage = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconPage(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="page"><path stroke="currentColor" strokeLinecap="round" d="M5.5 4.5h5m-5 2h3" /><path stroke="currentColor" d="M12.5 3v10a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 13V3A1.5 1.5 0 0 1 5 1.5h6A1.5 1.5 0 0 1 12.5 3Z" />{props.children}</SvgRoot>;
});
export default IconPage;
