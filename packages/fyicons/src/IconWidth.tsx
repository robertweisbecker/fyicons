import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconWidth = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconWidth(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="width"><path fill="currentColor" fillOpacity={0.9} d="M1.495 10.995a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m13 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5M5.647 5.646a.5.5 0 0 1 .707.708L5.207 7.5h5.586L9.647 6.355a.5.5 0 1 1 .707-.707l2 2a.5.5 0 0 1 0 .706l-2 2a.5.5 0 1 1-.707-.708l1.146-1.145H5.207l1.146 1.145a.5.5 0 0 1-.707.707l-2-1.999a.5.5 0 0 1 0-.707zm-4.152 1.35a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m13 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m-13-4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m13 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5" /></SvgRoot>;
});
export default IconWidth;
