import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconCheck = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconCheck(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="check"><path fill="currentColor" d="M13.09 3.213a.5.5 0 0 1 .819.574l-7 10a.5.5 0 0 1-.8.025l-4-5a.5.5 0 0 1 .781-.625l3.582 4.479z" />{props.children}</SvgRoot>;
});
export default IconCheck;
