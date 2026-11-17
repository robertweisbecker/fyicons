import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconProgressPie80 = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconProgressPie80(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="progress-pie-80"><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M2.007 8.31l.01.127-.012-.201zm-.002-.552Q2 7.877 2 8l.005-.234zM8 2a6 6 0 0 0-5.706 4.146L8 8zm5.854 7.311.03-.133zm-.525-4.066" />{props.children}</SvgRoot>;
});
export default IconProgressPie80;
