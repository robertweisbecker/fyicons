import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowExternal = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowExternal(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-external"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8.5 7.5 5-5m0 4v-4h-4m3 7v1a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h1" />{props.children}</SvgRoot>;
});
export default IconArrowExternal;
