import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrangeMiddle = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrangeMiddle(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrange-middle"><path fill="currentColor" d="M2 8.5a.5.5 0 0 0 .5.5H5v2.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V9h2v4.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V9h2.5a.5.5 0 0 0 0-1H11V3.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V8H7V5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V8H2.5a.5.5 0 0 0-.5.5" /></SvgRoot>;
});
export default IconArrangeMiddle;
