import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSunset = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSunset(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="sunset"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3.5 13.5h9m-8-.5a3.5 3.5 0 1 1 7 0m0-4.5 1-1m-9 0 1 1m9 3h1m-13 0h1" /><path fill="currentColor" d="m7.794 7.828-1.772-2.56a.25.25 0 0 1 .205-.393h3.546a.25.25 0 0 1 .205.392L8.206 7.828a.25.25 0 0 1-.412 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 6.5v-4" />{props.children}</SvgRoot>;
});
export default IconSunset;
