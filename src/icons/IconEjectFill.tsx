import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconEjectFill = React.forwardRef<SVGSVGElement, IconProps>(function IconEjectFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.7494 10.9997C13.3016 10.9997 13.7493 11.4475 13.7494 11.9997V12.9997C13.7494 13.552 13.3017 13.9997 12.7494 13.9997H3.2494C2.69729 13.9995 2.2494 13.5519 2.2494 12.9997V11.9997C2.24951 11.4476 2.69736 10.9999 3.2494 10.9997H12.7494ZM7.31776 2.38936C7.7022 2.02972 8.29953 2.02972 8.68397 2.38936L13.9008 7.26924C14.5631 7.88888 14.1252 8.99963 13.2182 8.99971H2.78358C1.87652 8.99971 1.4376 7.88891 2.09999 7.26924L7.31776 2.38936Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconEjectFill;
