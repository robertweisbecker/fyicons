import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconFileText = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconFileText(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="file-text"><path fill="currentColor" d="M7.672 1a2.5 2.5 0 0 1 1.767.732l2.829 2.829A2.5 2.5 0 0 1 13 6.328V12.5a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5V3a2 2 0 0 1 2-2zM5 2a1 1 0 0 0-1 1v9.5A1.5 1.5 0 0 0 5.5 14h5a1.5 1.5 0 0 0 1.5-1.5V6.75a.75.75 0 0 0-.75-.75H9.5A1.5 1.5 0 0 1 8 4.5V2.037A1.5 1.5 0 0 0 7.672 2zm3.5 8a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm2-2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM9 4.5a.5.5 0 0 0 .5.5h1.75l.045.002L9 2.707z" />{props.children}</SvgRoot>;
});
export default IconFileText;
