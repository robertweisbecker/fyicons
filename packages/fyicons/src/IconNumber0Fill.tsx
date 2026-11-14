import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconNumber0Fill = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconNumber0Fill(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="number0-fill"><path fill="currentColor" d="M11.5 2A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zM8 4.947c-1.376 0-2.375 1.288-2.375 3.063 0 1.774 1 3.062 2.375 3.062s2.375-1.288 2.375-3.062c0-1.775-.999-3.063-2.375-3.063m0 1.1c.525 0 1.275.52 1.275 1.963S8.525 9.973 8 9.973s-1.275-.52-1.275-1.963S7.475 6.047 8 6.047" />{props.children}</SvgRoot>;
});
export default IconNumber0Fill;
