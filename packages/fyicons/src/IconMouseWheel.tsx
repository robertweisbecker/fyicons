import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconMouseWheel = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconMouseWheel(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="mouse-wheel"><path fill="currentColor" d="M7 5a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0z" /><path stroke="currentColor" d="M7.5 14.5h1a4 4 0 0 0 4-4v-6a3 3 0 0 0-3-3h-3a3 3 0 0 0-3 3v6a4 4 0 0 0 4 4Z" />{props.children}</SvgRoot>;
});
export default IconMouseWheel;
