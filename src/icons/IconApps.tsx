import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconApps = React.forwardRef<SVGSVGElement, IconProps>(function IconApps(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M4.5 9C5.88071 9 7 10.1193 7 11.5C7 12.8807 5.88071 14 4.5 14C3.11929 14 2 12.8807 2 11.5C2 10.1193 3.11929 9 4.5 9ZM11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 10.1193 10.1193 9 11.5 9ZM4.5 10C3.67157 10 3 10.6716 3 11.5C3 12.3284 3.67157 13 4.5 13C5.32843 13 6 12.3284 6 11.5C6 10.6716 5.32843 10 4.5 10ZM11.5 10C10.6716 10 10 10.6716 10 11.5C10 12.3284 10.6716 13 11.5 13C12.3284 13 13 12.3284 13 11.5C13 10.6716 12.3284 10 11.5 10ZM4.5 2C5.88071 2 7 3.11929 7 4.5C7 5.88071 5.88071 7 4.5 7C3.11929 7 2 5.88071 2 4.5C2 3.11929 3.11929 2 4.5 2ZM11.5 2C12.8807 2 14 3.11929 14 4.5C14 5.88071 12.8807 7 11.5 7C10.1193 7 9 5.88071 9 4.5C9 3.11929 10.1193 2 11.5 2ZM4.5 3C3.67157 3 3 3.67157 3 4.5C3 5.32843 3.67157 6 4.5 6C5.32843 6 6 5.32843 6 4.5C6 3.67157 5.32843 3 4.5 3ZM11.5 3C10.6716 3 10 3.67157 10 4.5C10 5.32843 10.6716 6 11.5 6C12.3284 6 13 5.32843 13 4.5C13 3.67157 12.3284 3 11.5 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconApps;
