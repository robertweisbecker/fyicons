import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDisclosure = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDisclosure(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="disclosure"><path d="M10.6469 6.14669C10.8422 5.95143 11.1587 5.95143 11.3539 6.14669C11.5491 6.34196 11.5492 6.65849 11.3539 6.85372L8.35393 9.85372C8.15869 10.0489 7.84214 10.0489 7.6469 9.85372L4.6469 6.85372C4.45166 6.65849 4.45171 6.34196 4.6469 6.14669C4.84216 5.95143 5.15867 5.95143 5.35393 6.14669L8.00041 8.79318L10.6469 6.14669Z" fill="currentColor" /></SvgRoot>;
});
export default IconDisclosure;
