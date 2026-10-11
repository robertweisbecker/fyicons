import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconAlignBottom = React.forwardRef<SVGSVGElement, IconProps>(function IconAlignBottom(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M12.5 13C12.7761 13 13 13.2239 13 13.5C13 13.7761 12.7761 14 12.5 14H3.5C3.22386 14 3 13.7761 3 13.5C3 13.2239 3.22386 13 3.5 13H12.5ZM8 3C8.27614 3 8.5 3.22386 8.5 3.5V9.79297L10.6465 7.64648C10.8417 7.45122 11.1583 7.45122 11.3535 7.64648C11.5488 7.84175 11.5488 8.15825 11.3535 8.35352L8.35352 11.3535C8.18265 11.5244 7.91869 11.5461 7.72461 11.418L7.64648 11.3535L4.64648 8.35352C4.45122 8.15825 4.45122 7.84175 4.64648 7.64648C4.84175 7.45122 5.15825 7.45122 5.35352 7.64648L7.5 9.79297V3.5C7.5 3.22386 7.72386 3 8 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconAlignBottom;
