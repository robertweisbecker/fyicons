import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconExtensionsAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconExtensionsAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="extensions-alt"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.5h-4a1 1 0 0 0-1 1v4h5zm3-3h4a1 1 0 0 1 1 1v4h-5zm-8 8h5v5h-4a1 1 0 0 1-1-1zm5 0h5v4a1 1 0 0 1-1 1h-4z" />{props.children}</SvgRoot>;
});
export default IconExtensionsAlt;
