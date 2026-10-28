import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSparkleFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSparkleFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sparkle-fill"><path fill="currentColor" d="M6.769 1.87C7.164.683 8.84.683 9.236 1.87l.829 2.486a2.5 2.5 0 0 0 1.58 1.582l2.26.752c1.258.42 1.258 2.2 0 2.62l-2.26.752a2.5 2.5 0 0 0-1.58 1.582l-.753 2.26c-.42 1.258-2.2 1.258-2.62 0l-.752-2.26a2.5 2.5 0 0 0-1.581-1.582l-2.26-.752c-1.258-.42-1.258-2.2 0-2.62l2.26-.753a2.5 2.5 0 0 0 1.58-1.58z" /></SvgRoot>;
});
export default IconSparkleFill;
