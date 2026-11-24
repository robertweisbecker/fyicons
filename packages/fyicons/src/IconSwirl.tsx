import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSwirl = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSwirl(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="swirl"><path fill="currentColor" d="M7.447 14.756a7.003 7.003 0 0 0 7.11-9.434c-.675-1.8-2.126-2.971-3.687-3.256-1.581-.287-3.235.345-4.218 2.047-.679 1.176-.515 2.624.1 3.752.617 1.13 1.75 2.054 3.148 2.096a.5.5 0 0 0 .03-1c-.952-.028-1.804-.667-2.3-1.575-.496-.91-.572-1.977-.112-2.773.767-1.328 1.998-1.776 3.172-1.562 1.193.217 2.37 1.13 2.93 2.622A6 6 0 1 1 4.357 3.01a.501.501 0 0 0-.607-.795 7 7 0 0 0 3.697 12.54" />{props.children}</SvgRoot>;
});
export default IconSwirl;
