import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconAlignTop = React.forwardRef<SVGSVGElement, IconProps>(function IconAlignTop(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M7.72461 5.58203C7.91869 5.45387 8.18265 5.47562 8.35352 5.64648L11.3535 8.64648C11.5488 8.84175 11.5488 9.15825 11.3535 9.35352C11.1583 9.54878 10.8417 9.54878 10.6465 9.35352L8.5 7.20703V13.5C8.5 13.7761 8.27614 14 8 14C7.72386 14 7.5 13.7761 7.5 13.5V7.20703L5.35352 9.35352C5.15825 9.54878 4.84175 9.54878 4.64648 9.35352C4.45122 9.15825 4.45122 8.84175 4.64648 8.64648L7.64648 5.64648L7.72461 5.58203ZM13.5 3C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H2.5C2.22386 4 2 3.77614 2 3.5C2 3.22386 2.22386 3 2.5 3H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconAlignTop;
