import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSparkleFill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSparkleFill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sparkle-fill"><path fill="currentColor" d="M6.675 1.903C7.1.627 8.905.627 9.33 1.903l.797 2.39a2.5 2.5 0 0 0 1.58 1.582l2.391.797c1.277.425 1.277 2.23 0 2.656l-2.39.797a2.5 2.5 0 0 0-1.581 1.58l-.797 2.391c-.426 1.277-2.231 1.277-2.656 0l-.797-2.39a2.5 2.5 0 0 0-1.581-1.581l-2.391-.797c-1.276-.426-1.276-2.23 0-2.656l2.39-.797a2.5 2.5 0 0 0 1.582-1.581z" />{props.children}</SvgRoot>;
});
export default IconSparkleFill;
