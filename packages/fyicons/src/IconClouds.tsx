import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconClouds = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconClouds(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="clouds"><path stroke="currentColor" strokeLinejoin="round" d="M5.5 5a3 3 0 0 1 3 3H9a2.5 2.5 0 0 1 0 5H3a2.5 2.5 0 0 1-.5-4.95V8a3 3 0 0 1 3-3Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.5 10.5H13a2.5 2.5 0 0 0 0-5h-.5c0-1.657-1.355-3-3.012-3a3.03 3.03 0 0 0-2.974 2.43L6.5 5" />{props.children}</SvgRoot>;
});
export default IconClouds;
