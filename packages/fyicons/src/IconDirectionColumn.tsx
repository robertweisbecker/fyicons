import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDirectionColumn = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDirectionColumn(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix} iconName="direction-column"><path d="M6 9C6.55228 9 7 9.44772 7 10V13C7 13.5523 6.55228 14 6 14H3C2.44772 14 2 13.5523 2 13V10C2 9.44772 2.44772 9 3 9H6ZM3 13H6V10H3V13ZM11.5 3C11.7761 3 12 3.22386 12 3.5V11.293L13.6465 9.64648C13.8417 9.45122 14.1583 9.45122 14.3535 9.64648C14.5488 9.84175 14.5488 10.1583 14.3535 10.3535L11.8535 12.8535C11.6827 13.0244 11.4187 13.0461 11.2246 12.918L11.1465 12.8535L8.64648 10.3535C8.45122 10.1583 8.45122 9.84175 8.64648 9.64648C8.84175 9.45122 9.15825 9.45122 9.35352 9.64648L11 11.293V3.5C11 3.22386 11.2239 3 11.5 3ZM6 2C6.55228 2 7 2.44772 7 3V6C7 6.55228 6.55228 7 6 7H3C2.44772 7 2 6.55228 2 6V3C2 2.44772 2.44772 2 3 2H6ZM3 6H6V3H3V6Z" fill="currentColor" /></SvgRoot>;
});
export default IconDirectionColumn;
