import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSignIn = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSignIn(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M8.64648 5.14742C8.84175 4.95216 9.15825 4.95216 9.35352 5.14742L11.8535 7.64742C12.0243 7.81829 12.0461 8.0823 11.918 8.27633L11.8535 8.35445L9.35352 10.8545C9.15829 11.0495 8.84171 11.0495 8.64648 10.8545C8.45127 10.6592 8.45136 10.3427 8.64648 10.1474L10.293 8.50094H2.5C2.22395 8.50094 2.00015 8.27695 2 8.00094C2 7.7248 2.22386 7.50094 2.5 7.50094H10.293L8.64648 5.85445C8.45127 5.65924 8.45136 5.3427 8.64648 5.14742Z" fill="currentColor" /><path d="M6.5 10.5V12C6.5 12.8284 7.17157 13.5 8 13.5H12C12.8284 13.5 13.5 12.8284 13.5 12V4C13.5 3.17157 12.8284 2.5 12 2.5H8C7.17157 2.5 6.5 3.17157 6.5 4V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></SvgRoot>;
});
export default IconSignIn;
