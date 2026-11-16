import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconTicket = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconTicket(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="ticket"><path fill="currentColor" d="M13 3c.577 0 1.102.145 1.479.521.376.377.521.902.521 1.479v1.5a.5.5 0 0 1-.5.5H14a1 1 0 0 0 0 2h.5a.5.5 0 0 1 .5.5V11c0 .577-.145 1.102-.521 1.479-.377.376-.902.521-1.479.521H3c-.577 0-1.102-.145-1.479-.521C1.145 12.102 1 11.577 1 11V9.5a.5.5 0 0 1 .5-.5H2a1 1 0 0 0 0-2h-.5a.5.5 0 0 1-.5-.5V5c0-.577.145-1.102.521-1.479C1.898 3.145 2.423 3 3 3zM3 4c-.423 0-.648.105-.771.229C2.105 4.352 2 4.577 2 5v1a2 2 0 1 1 0 4v1c0 .423.105.648.229.771.123.124.348.229.771.229h10c.423 0 .648-.105.771-.229.124-.123.229-.348.229-.771v-1a2 2 0 0 1 0-4V5c0-.423-.105-.648-.229-.771C13.649 4.105 13.423 4 13 4z" /><path fill="currentColor" d="M9 7.5a.5.5 0 0 0-1 0zm-1 1a.5.5 0 0 0 1 0zm1 2a.5.5 0 0 0-1 0zm-1 1v.5h1v-.5zm0-6a.5.5 0 0 0 1 0zm1-1V4H8v.5zm-.5 3H8v1h1v-1zm0 3H8v1h1v-1zm0-5H9v-1H8v1z" /></SvgRoot>;
});
export default IconTicket;
