import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconLetterM = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconLetterM(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="letter-m"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 13.5V2.77a.25.25 0 0 1 .452-.147L8 9.57l5.048-6.948a.25.25 0 0 1 .452.147V13.5" />{props.children}</SvgRoot>;
});
export default IconLetterM;
