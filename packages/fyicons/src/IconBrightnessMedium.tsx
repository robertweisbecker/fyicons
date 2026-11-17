import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconBrightnessMedium = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconBrightnessMedium(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="brightness-medium"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5h-5m2.5-5v1m-6.5 4h1m11 0h1m-11-4 1 1m7 0 1-1" />{props.children}</SvgRoot>;
});
export default IconBrightnessMedium;
