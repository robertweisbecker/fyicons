import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconSendAlt = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconSendAlt(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot fill="none" viewBox="0 0 16 16" {...props} ref={ref} idPrefix={idPrefix} iconName="send-alt"><path fill="currentColor" d="M2.14 4.423c-.553-1.494 1.017-2.89 2.437-2.167l8.65 4.407c1.092.556 1.092 2.117 0 2.674l-8.65 4.407c-1.42.723-2.99-.673-2.437-2.167L3.464 8zm1.983-1.276c-.609-.31-1.281.289-1.044.93L4.345 7.5h4.153a.5.5 0 0 1 0 1H4.345L3.08 11.924a.75.75 0 0 0 1.044.929l8.65-4.408a.5.5 0 0 0 0-.89z" />{props.children}</SvgRoot>;
});
export default IconSendAlt;
