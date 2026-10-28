import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrangeBottom = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrangeBottom(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrange-bottom"><path fill="currentColor" d="M14 13.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 .5.5m-7-2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5zm4 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" /></SvgRoot>;
});
export default IconArrangeBottom;
