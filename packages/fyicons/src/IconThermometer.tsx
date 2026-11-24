import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconThermometer = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconThermometer(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="thermometer"><path stroke="currentColor" d="M8.5.5a2 2 0 0 1 2 2v7.768c.613.549 1 1.344 1 2.232a3 3 0 1 1-6 0 3 3 0 0 1 1-2.232V2.5a2 2 0 0 1 2-2Z" /><circle cx={8.5} cy={12.5} r={1.5} fill="currentColor" /><path stroke="currentColor" strokeLinecap="round" d="M8.5 12.5v-4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 4.5v.01m0 1.99v.01m0-4.01v.01" />{props.children}</SvgRoot>;
});
export default IconThermometer;
