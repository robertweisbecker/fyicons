import * as React from 'react';
import type { IconProps } from './types';
import SvgRoot from './base';
const IconTerminalSquare = React.forwardRef<SVGSVGElement, IconProps>(function IconTerminalSquare(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  return <SvgRoot viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} ref={ref} idPrefix={idPrefix}><path d="M11 2C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5C2 3.34315 3.34315 2 5 2H11ZM5 3C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V5C13 3.89543 12.1046 3 11 3H5ZM4.39648 5.14648C4.59175 4.95122 4.90825 4.95122 5.10352 5.14648L6.60352 6.64648C6.79878 6.84175 6.79878 7.15825 6.60352 7.35352L5.10352 8.85352C4.90825 9.04878 4.59175 9.04878 4.39648 8.85352C4.20122 8.65825 4.20122 8.34175 4.39648 8.14648L5.54297 7L4.39648 5.85352C4.20122 5.65825 4.20122 5.34175 4.39648 5.14648ZM9.5 8C9.77614 8 10 8.22386 10 8.5C10 8.77614 9.77614 9 9.5 9H7.5C7.22386 9 7 8.77614 7 8.5C7 8.22386 7.22386 8 7.5 8H9.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></SvgRoot>;
});
export default IconTerminalSquare;
