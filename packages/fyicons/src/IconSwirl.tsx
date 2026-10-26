import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSwirl = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSwirl(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix}><path fill="currentColor" d="M7.446 14.755a7 7 0 0 0 7.11-9.433c-.675-1.8-2.125-2.972-3.687-3.256-1.581-.288-3.235.345-4.218 2.047-.679 1.176-.515 2.624.1 3.752.617 1.13 1.75 2.053 3.148 2.095a.5.5 0 1 0 .03-.999c-.951-.028-1.804-.668-2.3-1.576-.496-.91-.571-1.976-.112-2.772.767-1.329 1.998-1.776 3.172-1.563 1.194.218 2.37 1.13 2.93 2.622a6.001 6.001 0 1 1-10.836-.86A6 6 0 0 1 4.356 3.01a.5.5 0 0 0-.607-.795 7 7 0 0 0 3.697 12.54" /></SvgRoot>;
});
export default IconSwirl;
