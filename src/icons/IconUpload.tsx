import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconUpload = React.forwardRef<SVGSVGElement, IconProps>(function IconUpload(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.5 10.0003C12.7761 10.0003 13 10.2242 13 10.5003V12.0003C13 13.1049 12.1046 14.0003 11 14.0003H5C3.89543 14.0003 3 13.1049 3 12.0003V10.5003C3 10.2242 3.22386 10.0003 3.5 10.0003C3.77614 10.0003 4 10.2242 4 10.5003V12.0003C4 12.5526 4.44772 13.0003 5 13.0003H11C11.5523 13.0003 12 12.5526 12 12.0003V10.5003C12 10.2242 12.2239 10.0003 12.5 10.0003ZM7.72461 2.08235C7.9186 1.95435 8.18269 1.97615 8.35352 2.1468L11.3535 5.1468C11.5487 5.342 11.5486 5.65855 11.3535 5.85383C11.1583 6.04909 10.8417 6.04909 10.6465 5.85383L8.5 3.70735V10.5003C8.49987 10.7763 8.27606 11.0003 8 11.0003C7.72394 11.0003 7.50013 10.7763 7.5 10.5003V3.70735L5.35352 5.85383C5.15825 6.04909 4.84175 6.04909 4.64648 5.85383C4.4514 5.65855 4.45128 5.342 4.64648 5.1468L7.64648 2.1468L7.72461 2.08235Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconUpload;
