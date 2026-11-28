import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconThermometerMin = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconThermometerMin(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="thermometer-min"><path stroke="currentColor" d="M8.5.5a2 2 0 0 1 2 2v7.768c.613.549 1 1.344 1 2.232a3 3 0 1 1-6 0 3 3 0 0 1 1-2.232V2.5a2 2 0 0 1 2-2Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 4.5v.01m0 1.99v.01m0-4.01v.01m0-.01v.01m0 1.99v.01m0 1.99v.01m0 1.99v.01" /><path fill="currentColor" d="M10 12.5a1.5 1.5 0 0 1-3 0z" />{props.children}</SvgRoot>;
});
export default IconThermometerMin;
