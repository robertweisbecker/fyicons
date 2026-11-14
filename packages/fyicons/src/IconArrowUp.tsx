import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconArrowUp = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUp(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="arrow-up"><path fill="currentColor" d="M7.647 2.646a.5.5 0 0 1 .708 0l4.5 4.5a.5.5 0 0 1-.708.708L8.501 4.209V13.5a.5.5 0 0 1-1 0V4.208L3.854 7.854a.5.5 0 0 1-.707-.707z" />{props.children}</SvgRoot>;
});
export default IconArrowUp;
