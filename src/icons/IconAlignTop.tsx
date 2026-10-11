import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconAlignTop = React.forwardRef<SVGSVGElement, IconProps>(function IconAlignTop(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.72461 4.58203C7.91869 4.45387 8.18265 4.47562 8.35352 4.64648L11.3535 7.64648C11.5488 7.84175 11.5488 8.15825 11.3535 8.35352C11.1583 8.54878 10.8417 8.54878 10.6465 8.35352L8.5 6.20703V12.5C8.5 12.7761 8.27614 13 8 13C7.72386 13 7.5 12.7761 7.5 12.5V6.20703L5.35352 8.35352C5.15825 8.54878 4.84175 8.54878 4.64648 8.35352C4.45122 8.15825 4.45122 7.84175 4.64648 7.64648L7.64648 4.64648L7.72461 4.58203ZM12.5 2C12.7761 2 13 2.22386 13 2.5C13 2.77614 12.7761 3 12.5 3H3.5C3.22386 3 3 2.77614 3 2.5C3 2.22386 3.22386 2 3.5 2H12.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconAlignTop;
