import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot, { useIdPrefix } from './base';
const IconDirectionRow = /* @__PURE__ */React.forwardRef<SVGSVGElement, IconProps>(function IconDirectionRow(props, ref) {
  const idPrefix = useIdPrefix();
  return <SvgRoot viewBox="0 0 16 16" fill="none" {...props} ref={ref} idPrefix={idPrefix}><path d="M9.64648 8.64648C9.84175 8.45122 10.1583 8.45122 10.3535 8.64648L12.8535 11.1465C13.0244 11.3173 13.0461 11.5813 12.918 11.7754L12.8535 11.8535L10.3535 14.3535C10.1583 14.5488 9.84175 14.5488 9.64648 14.3535C9.45122 14.1583 9.45122 13.8417 9.64648 13.6465L11.293 12H3.5C3.22386 12 3 11.7761 3 11.5C3 11.2239 3.22386 11 3.5 11H11.293L9.64648 9.35352C9.45122 9.15825 9.45122 8.84175 9.64648 8.64648ZM6 2C6.55228 2 7 2.44772 7 3V6C7 6.55228 6.55228 7 6 7H3C2.44772 7 2 6.55228 2 6V3C2 2.44772 2.44772 2 3 2H6ZM13 2C13.5523 2 14 2.44772 14 3V6C14 6.55228 13.5523 7 13 7H10C9.44772 7 9 6.55228 9 6V3C9 2.44772 9.44772 2 10 2H13ZM3 6H6V3H3V6ZM10 6H13V3H10V6Z" fill="currentColor" /></SvgRoot>;
});
export default IconDirectionRow;
