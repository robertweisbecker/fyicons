import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBroom = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBroom(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="broom"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10.25 11.25-4.5-4.5M1.5 8.5h1.343a4 4 0 0 0 2.829-1.172L6.5 6.5a1.414 1.414 0 0 1 2 0h1a1 1 0 0 1 1 1v1a1.414 1.414 0 0 1 0 2l-1.459 1.459A5.08 5.08 0 0 1 2.5 12.5l1-1a2 2 0 0 1-2-2zm13-6-4 4" />{props.children}</SvgRoot>;
});
export default IconBroom;
